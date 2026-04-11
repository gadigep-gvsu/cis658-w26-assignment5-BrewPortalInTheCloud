<template>
  <div
    class="baseBeverage"
    :style="{ backgroundColor: displayBase.color }"
  ></div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBeverageStore } from "../stores/beverageStore";

const store = useBeverageStore();
const { displayBase } = storeToRefs(store);
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>
