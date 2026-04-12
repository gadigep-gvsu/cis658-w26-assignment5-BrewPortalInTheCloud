<template>
  <div class="app">
    <h1>Custom Beverage Maker</h1>

    <Beverage :key="mugKey" />
    <ul class="options">
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
              @change="beverageStore.touchForm"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`base-${base.id}`"
              :value="base.id"
              v-model="currentBaseIdModel"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`syrup-${syrup.id}`"
              :value="syrup.id"
              v-model="currentSyrupIdModel"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`creamer-${creamer.id}`"
              :value="creamer.id"
              v-model="currentCreamerIdModel"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
    <div class="make-row">
      <label class="name-label" for="beverage-name">Name</label>
      <input
        id="beverage-name"
        type="text"
        v-model="beverageStore.beverageName"
        placeholder=""
        autocomplete="off"
      />
      <button
        type="button"
        :disabled="!beverageStore.user"
        @click="handleMakeBeverage"
      >
        🍺 Make Beverage
      </button>
    </div>

    <div class="auth-bar">
      <template v-if="!beverageStore.user">
        <button type="button" class="btn-google" @click="withGoogle">
          Sign in with Google
        </button>
      </template>
      <template v-else>
        <span class="user-label">
          Signed in as
          <strong class="user-name">{{ userDisplayName }}</strong>
        </span>
        <button type="button" class="btn-signout" @click="signOutUser">
          Sign out
        </button>
      </template>
    </div>

    <p
      v-if="statusLine"
      class="message"
      role="status"
      aria-live="polite"
    >
      {{ statusLine }}
    </p>

    <div v-if="beverageStore.user" id="beverage-container">
      <template v-for="bev in beverageStore.savedBeverages" :key="bev.id">
        <label class="saved-bev">
          <input
            type="radio"
            name="saved-beverage"
            :value="bev.id"
            v-model="selectedSavedBeverageId"
          />
          {{ bev.name }}
        </label>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { storeToRefs } from "pinia";
import {
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { auth } from "./firebase";

const beverageStore = useBeverageStore();
const { currentTemp, currentBase, currentSyrup, currentCreamer, currentBeverage } =
  storeToRefs(beverageStore);

const message = ref("");

const statusLine = computed(() => {
  if (message.value) return message.value;
  if (!beverageStore.user) {
    return "Please sign in to save your beverage.";
  }
  return "";
});

const userDisplayName = computed(() => {
  const u = beverageStore.user;
  if (!u) return "";
  return u.displayName?.trim() || u.email || "User";
});

const currentBaseIdModel = computed({
  get: () => currentBase.value.id,
  set: (id: string) => {
    beverageStore.setCurrentBase(id);
    beverageStore.touchForm();
  },
});

const currentSyrupIdModel = computed({
  get: () => currentSyrup.value.id,
  set: (id: string) => {
    beverageStore.setCurrentSyrup(id);
    beverageStore.touchForm();
  },
});

const currentCreamerIdModel = computed({
  get: () => currentCreamer.value.id,
  set: (id: string) => {
    beverageStore.setCurrentCreamer(id);
    beverageStore.touchForm();
  },
});

const selectedSavedBeverageId = computed({
  get: () => currentBeverage.value?.id ?? "",
  set: (id: string) => {
    if (id) beverageStore.showBeverage(id);
  },
});

const mugKey = computed(() => {
  if (currentBeverage.value?.id) return currentBeverage.value.id;
  return [
    currentTemp.value,
    currentBase.value.id,
    currentSyrup.value.id,
    currentCreamer.value.id,
  ].join("-");
});

const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
  beverageStore.setUser(user);
});

onMounted(async () => {
  try {
    const cred = await getRedirectResult(auth);
    if (cred?.user) {
      beverageStore.setUser(cred.user);
    }
  } catch {
    /* not a redirect sign-in, or redirect failed */
  }
});

onUnmounted(() => {
  unsubscribeAuth();
});

async function withGoogle() {
  message.value = "";
  const provider = new GoogleAuthProvider();
  try {
    const cred = await signInWithPopup(auth, provider);
    beverageStore.setUser(cred.user);
  } catch (e: unknown) {
    message.value =
      e instanceof Error ? e.message : "Sign-in failed. Please try again.";
  }
}

async function signOutUser() {
  message.value = "";
  try {
    await signOut(auth);
  } catch (e: unknown) {
    message.value =
      e instanceof Error ? e.message : "Sign out failed. Please try again.";
  }
}

async function handleMakeBeverage() {
  message.value = await beverageStore.makeBeverage();
}
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
#app {
  width: 100%;
}
.app {
  max-width: 28rem;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
  color: #f5f0e8;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}
h1 {
  font-size: 1.35rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 1.25rem;
  letter-spacing: 0.02em;
}
.auth-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem 1rem;
  margin: 1rem 0 0.75rem;
}
.user-label {
  font-size: 0.95rem;
  text-align: center;
  line-height: 1.4;
}
.user-name {
  display: inline-block;
  margin-left: 0.2rem;
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.12);
}
.btn-google,
.btn-signout {
  cursor: pointer;
  padding: 0.45rem 1rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: #fff;
  color: #333;
  font: inherit;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}
.btn-signout {
  background: #f5e6c8;
  border-color: #8b6914;
  color: #3d2914;
}
.message {
  margin: 0 0 1rem;
  padding: 0.65rem 0.85rem;
  border-radius: 6px;
  background: #f5f0e8;
  color: #3d2914;
  font-size: 0.95rem;
  text-align: center;
  line-height: 1.35;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
}
ul.options {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
}
ul.options li {
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}
ul.options label {
  cursor: pointer;
  white-space: nowrap;
}
.make-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  margin-bottom: 0.25rem;
}
.name-label {
  font-weight: 500;
}
.make-row input[type="text"] {
  flex: 1;
  min-width: 8rem;
  padding: 0.35rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #c6c6c6;
}
.make-row button {
  cursor: pointer;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #8b6914;
  background: #f5e6c8;
  font: inherit;
}
.make-row button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}
#beverage-container {
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  align-items: center;
}
.saved-bev {
  cursor: pointer;
  white-space: nowrap;
}
</style>
