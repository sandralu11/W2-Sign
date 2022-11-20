<template>
  <div class="h-10 bg-primary">
    <router-link to="/">
      <i class="bx bxs-chevron-left text-3xl leading-10 text-white"></i>
    </router-link>
  </div>
  <div v-if="signStore.historyPdf.length > 0">
    <router-link
      v-for="(pdf, index) in signStore.historyPdf"
      :key="index"
      :to="`/save?h=${index}`"
      class="m-3 flex items-center justify-between rounded-lg bg-white p-3 drop-shadow-lg"
    >
      <div class="">{{ pdf.time }}</div>
      <p class="truncate px-3 text-primary">{{ pdf.name }}</p>
      <i class="bx bxs-chevron-right text-gray-400"></i>
    </router-link>
  </div>
  <div v-else class="pt-10">
    <img class="mx-auto" src="../assets/img/tree.png" alt="" />
    <p class="text-center text-2xl font-bold leading-loose">尚無任何紀錄</p>
  </div>
</template>
<script setup>
import { useSignStore } from "../stores/sign";
const signStore = useSignStore();
</script>
