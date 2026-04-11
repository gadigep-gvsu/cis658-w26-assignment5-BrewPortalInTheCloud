import { defineStore } from "pinia";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import temps from "../data/tempretures.json";
import type {
  BaseBeverageType,
  BeverageType,
  CreamerType,
  SyrupType,
} from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temps as string[],
    bases: bases as BaseBeverageType[],
    syrups: syrups as SyrupType[],
    creamers: creamers as CreamerType[],
    currentTemp: temps[0] as string,
    currentBaseId: (bases[0] as BaseBeverageType).id,
    currentSyrupId: (syrups[0] as SyrupType).id,
    currentCreamerId: (creamers[0] as CreamerType).id,
    beverageName: "",
    savedBeverages: [] as BeverageType[],
    selectedBeverageId: null as string | null,
  }),

  getters: {
    displayTemp(state): string {
      if (state.selectedBeverageId) {
        const found = state.savedBeverages.find(
          (b) => b.id === state.selectedBeverageId,
        );
        if (found) return found.temp;
      }
      return state.currentTemp;
    },
    displayBase(state): BaseBeverageType {
      if (state.selectedBeverageId) {
        const found = state.savedBeverages.find(
          (b) => b.id === state.selectedBeverageId,
        );
        if (found) return found.base;
      }
      return state.bases.find((b) => b.id === state.currentBaseId)!;
    },
    displaySyrup(state): SyrupType {
      if (state.selectedBeverageId) {
        const found = state.savedBeverages.find(
          (b) => b.id === state.selectedBeverageId,
        );
        if (found) return found.syrup;
      }
      return state.syrups.find((s) => s.id === state.currentSyrupId)!;
    },
    displayCreamer(state): CreamerType {
      if (state.selectedBeverageId) {
        const found = state.savedBeverages.find(
          (b) => b.id === state.selectedBeverageId,
        );
        if (found) return found.creamer;
      }
      return state.creamers.find((c) => c.id === state.currentCreamerId)!;
    },
    isIced(): boolean {
      return this.displayTemp === "Cold";
    },
  },

  actions: {
    touchForm() {
      this.selectedBeverageId = null;
    },
    makeBeverage() {
      const base = this.bases.find((b) => b.id === this.currentBaseId)!;
      const syrup = this.syrups.find((s) => s.id === this.currentSyrupId)!;
      const creamer = this.creamers.find((c) => c.id === this.currentCreamerId)!;
      const name = this.beverageName.trim() || "Untitled";
      const id = crypto.randomUUID();
      const recipe: BeverageType = {
        id,
        name,
        temp: this.currentTemp,
        base: { ...base },
        syrup: { ...syrup },
        creamer: { ...creamer },
      };
      this.savedBeverages.push(recipe);
      this.selectedBeverageId = id;
      this.beverageName = "";
    },
    showBeverage(id: string) {
      this.selectedBeverageId = id;
    },
  },
  persist: true,
});
