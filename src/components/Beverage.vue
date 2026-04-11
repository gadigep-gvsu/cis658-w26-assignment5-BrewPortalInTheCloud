<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template #top>
        <Creamer />
      </template>
      <template #mid>
        <Syrup />
      </template>
      <template #bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import { storeToRefs } from "pinia";
import { useBeverageStore } from "../stores/beverageStore";

const store = useBeverageStore();
const { isIced } = storeToRefs(store);
</script>
