<template>
  <div class="app">
    <h1>Vite + Vue + TS</h1>
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
              v-model="beverageStore.currentBaseId"
              @change="beverageStore.touchForm"
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
              v-model="beverageStore.currentSyrupId"
              @change="beverageStore.touchForm"
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
              v-model="beverageStore.currentCreamerId"
              @change="beverageStore.touchForm"
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
      <button type="button" @click="beverageStore.makeBeverage">
        🍺 Make Beverage
      </button>
    </div>
    <div id="beverage-container">
      <template v-for="bev in beverageStore.savedBeverages" :key="bev.id">
        <label class="saved-bev">
          <input
            type="radio"
            name="saved-beverage"
            :value="bev.id"
            v-model="selectedBeverageId"
            @change="beverageStore.showBeverage(bev.id)"
          />
          {{ bev.name }}
        </label>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
const { selectedBeverageId, currentTemp, currentBaseId, currentSyrupId, currentCreamerId } =
  storeToRefs(beverageStore);

const mugKey = computed(() => {
  if (selectedBeverageId.value) return selectedBeverageId.value;
  return [
    currentTemp.value,
    currentBaseId.value,
    currentSyrupId.value,
    currentCreamerId.value,
  ].join("-");
});
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
  max-width: 36rem;
  padding: 1rem;
  color: #f5f0e8;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}
h1 {
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 1rem;
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
  margin-bottom: 1rem;
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
#beverage-container {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}
.saved-bev {
  cursor: pointer;
  white-space: nowrap;
}
</style>
