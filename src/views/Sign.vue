<template>
  <div class="h-screen pt-7">
    <div
      class="mx-auto mb-11 flex w-8/12 rounded-xl bg-white text-center text-primary"
    >
      <div
        @click="tab = true"
        :class="{
          'bg-gradient-to-b from-green-600 to-green-900 text-white': tab,
        }"
        class="w-1/2 rounded-xl px-4 py-2 transition"
      >
        手寫簽名
      </div>
      <div
        @click="tab = false"
        :class="{
          'bg-gradient-to-b from-green-600 to-green-900 text-white': !tab,
        }"
        class="w-1/2 rounded-xl px-4 py-2 transition"
      >
        匯入簽名檔
      </div>
    </div>
    <div v-if="tab">
      <div class="mb-11 space-x-6 text-center">
        <button
          @click="pen = '#000000'"
          :class="{
            'ring ring-black ring-offset-4': pen === '#000000',
          }"
          class="h-11 w-11 rounded-full bg-black"
        ></button>
        <button
          @click="pen = '#0014C7'"
          :class="{
            'ring ring-[#0014C7] ring-offset-4': pen === '#0014C7',
          }"
          class="h-11 w-11 rounded-full bg-[#0014C7]"
        ></button>
        <button
          @click="pen = '#CA0000'"
          :class="{
            'ring ring-[#CA0000] ring-offset-4': pen === '#CA0000',
          }"
          class="h-11 w-11 rounded-full bg-[#CA0000]"
        ></button>
      </div>
      <div class="mx-auto mb-11 h-52 w-11/12 rounded-xl bg-white">
        <canvas class="h-full w-full"></canvas>
      </div>
    </div>
    <div v-else>
      <input id="file" type="file" class="hidden" />
      <label for="file" class="mx-auto mb-11 block w-11/12 rounded-xl bg-white">
        <p class="text-center leading-[200px] text-gray-400">請選擇檔案</p>
      </label>
    </div>

    <div class="text-center">
      <button class="btn-border mx-2">清除</button>
      <router-link to="/contract" class="btn-full mx-2">建立簽名</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tab = ref(true);
const pen = ref("#000000");
</script>
