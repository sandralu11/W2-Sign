<script setup>
import Loading from "./components/loading.vue";
import { ref } from "@vue/reactivity";
import { useSignStore } from "./stores/sign";
const signStore = useSignStore();
signStore.initSignImg();
signStore.initsavePdf();
const modal = ref(true);
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    modal.value = false;
  }, 1500);
});
</script>

<template>
  <Transition mode="out-in">
    <Loading v-if="modal" />
  </Transition>
  <router-view />
</template>

<style>
#app {
  background-color: #f0f0f0;
  min-height: 100vh;
}
</style>
