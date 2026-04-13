import { defineStore } from "pinia";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
  type QueryDocumentSnapshot,
  type Unsubscribe,
} from "firebase/firestore";
import type { User } from "firebase/auth";
import { db } from "../firebase";

/** Plain object so Pinia/Vue reactivity tracks sign-in updates (Firebase `User` is a class instance). */
export type AuthUserSnapshot = {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
};

function snapshotAuthUser(user: User | null): AuthUserSnapshot | null {
  if (!user) return null;
  return {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };
}
import temps from "../data/tempretures.json";
import type {
  BaseBeverageType,
  BeverageType,
  CreamerType,
  SyrupType,
} from "../types/beverage";

let beveragesUnsubscribe: Unsubscribe | null = null;

const emptyBase = (): BaseBeverageType => ({
  id: "",
  name: "",
  color: "transparent",
});
const emptySyrup = (): SyrupType => emptyBase();
const emptyCreamer = (): CreamerType => emptyBase();

function detachBeveragesListener() {
  if (beveragesUnsubscribe) {
    beveragesUnsubscribe();
    beveragesUnsubscribe = null;
  }
}

function mapIngredientDoc(d: QueryDocumentSnapshot): {
  id: string;
  name: string;
  color: string;
} {
  const data = d.data() as { id?: string; name: string; color: string };
  return {
    id: data.id ?? d.id,
    name: data.name,
    color: data.color,
  };
}

function beverageFromDoc(d: QueryDocumentSnapshot): BeverageType {
  const data = d.data() as {
    name: string;
    temp: string;
    base: BaseBeverageType;
    syrup: SyrupType;
    creamer: CreamerType;
  };
  return {
    id: d.id,
    name: data.name,
    temp: data.temp,
    base: data.base,
    syrup: data.syrup,
    creamer: data.creamer,
  };
}

function pickFromList<T extends { id: string }>(
  list: T[],
  preferred: T,
  empty: () => T,
): T {
  if (!list.length) return empty();
  const match = list.find((x) => x.id === preferred.id);
  return match ?? list[0]!;
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temps as string[],
    bases: [] as BaseBeverageType[],
    syrups: [] as SyrupType[],
    creamers: [] as CreamerType[],
    currentTemp: (temps as string[])[0] as string,
    currentBase: emptyBase(),
    currentSyrup: emptySyrup(),
    currentCreamer: emptyCreamer(),
    beverageName: "",
    savedBeverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    user: null as AuthUserSnapshot | null,
  }),

  getters: {
    displayTemp(state): string {
      if (state.currentBeverage) return state.currentBeverage.temp;
      return state.currentTemp;
    },
    displayBase(state): BaseBeverageType {
      if (state.currentBeverage) return state.currentBeverage.base;
      return state.currentBase.id
        ? state.currentBase
        : (state.bases[0] ?? emptyBase());
    },
    displaySyrup(state): SyrupType {
      if (state.currentBeverage) return state.currentBeverage.syrup;
      return state.currentSyrup.id
        ? state.currentSyrup
        : (state.syrups[0] ?? emptySyrup());
    },
    displayCreamer(state): CreamerType {
      if (state.currentBeverage) return state.currentBeverage.creamer;
      return state.currentCreamer.id
        ? state.currentCreamer
        : (state.creamers[0] ?? emptyCreamer());
    },
    isIced(): boolean {
      return this.displayTemp === "Cold";
    },
  },

  actions: {
    async init() {
      const [basesSnap, creamersSnap, syrupsSnap] = await Promise.all([
        getDocs(collection(db, "bases")),
        getDocs(collection(db, "creamers")),
        getDocs(collection(db, "syrups")),
      ]);

      const bases = basesSnap.docs.map(mapIngredientDoc);
      const creamers = creamersSnap.docs.map(mapIngredientDoc);
      const syrups = syrupsSnap.docs.map(mapIngredientDoc);

      const byId = (a: { id: string }, b: { id: string }) =>
        a.id.localeCompare(b.id);

      this.bases = bases.sort(byId);
      this.creamers = creamers.sort(byId);
      this.syrups = syrups.sort(byId);

      this.currentBase = pickFromList(this.bases, this.currentBase, emptyBase);
      this.currentCreamer = pickFromList(
        this.creamers,
        this.currentCreamer,
        emptyCreamer,
      );
      this.currentSyrup = pickFromList(this.syrups, this.currentSyrup, emptySyrup);

      if (!this.temps.includes(this.currentTemp)) {
        this.currentTemp = this.temps[0] ?? "Hot";
      }
    },

    setUser(user: User | null) {
      detachBeveragesListener();
      this.user = snapshotAuthUser(user);

      if (!user) {
        this.savedBeverages = [];
        this.currentBeverage = null;
        return;
      }

      const q = query(
        collection(db, "beverages"),
        where("userId", "==", user.uid),
      );

      beveragesUnsubscribe = onSnapshot(q, (snap) => {
        const list = snap.docs.map(beverageFromDoc);
        list.sort((a, b) => a.name.localeCompare(b.name));
        this.savedBeverages = list;

        if (this.currentBeverage) {
          const fresh = list.find((b) => b.id === this.currentBeverage!.id);
          this.currentBeverage = fresh ?? null;
        }
      });
    },

    setCurrentBase(id: string) {
      const next = this.bases.find((b) => b.id === id);
      if (next) this.currentBase = next;
    },

    setCurrentSyrup(id: string) {
      const next = this.syrups.find((s) => s.id === id);
      if (next) this.currentSyrup = next;
    },

    setCurrentCreamer(id: string) {
      const next = this.creamers.find((c) => c.id === id);
      if (next) this.currentCreamer = next;
    },

    touchForm() {
      this.currentBeverage = null;
    },

    async makeBeverage(): Promise<string> {
      if (!this.user) {
        return "No user logged in, please sign in first.";
      }

      const name = this.beverageName.trim();
      const base = this.currentBase;
      const syrup = this.currentSyrup;
      const creamer = this.currentCreamer;

      if (
        !name ||
        !this.currentTemp ||
        !base.id ||
        !syrup.id ||
        !creamer.id
      ) {
        return "Please complete all beverage options and the name before making a beverage.";
      }

      const id = crypto.randomUUID();
      const payload = {
        userId: this.user.uid,
        name,
        temp: this.currentTemp,
        base: { ...base },
        syrup: { ...syrup },
        creamer: { ...creamer },
      };

      const localBeverage: BeverageType = {
        id,
        name,
        temp: this.currentTemp,
        base: { ...base },
        syrup: { ...syrup },
        creamer: { ...creamer },
      };

      try {
        await setDoc(doc(db, "beverages", id), payload);
      } catch {
        return "Could not save your beverage. Check your connection and Firestore rules.";
      }

      this.beverageName = "";
      this.currentBeverage = localBeverage;

      return `Beverage ${name} made successfully!`;
    },

    showBeverage(id: string) {
      const found = this.savedBeverages.find((b) => b.id === id);
      if (!found) {
        this.currentBeverage = null;
        return;
      }

      this.currentTemp = found.temp;
      this.currentBase =
        this.bases.find((b) => b.id === found.base.id) ?? { ...found.base };
      this.currentSyrup =
        this.syrups.find((s) => s.id === found.syrup.id) ?? { ...found.syrup };
      this.currentCreamer =
        this.creamers.find((c) => c.id === found.creamer.id) ??
        { ...found.creamer };

      this.currentBeverage = { ...found };
    },
  },

  persist: {
    pick: [
      "currentTemp",
      "currentBase",
      "currentSyrup",
      "currentCreamer",
      "beverageName",
    ],
  },
});
