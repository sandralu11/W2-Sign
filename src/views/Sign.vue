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
        <canvas
          ref="canvas"
          @mousedown="startPosition"
          @mouseup="finishedPosition"
          @mouseleave="finishedPosition"
          @mousemove="draw"
          @touchstart="startPosition"
          @touchend="finishedPosition"
          @touchcancel="finishedPosition"
          @touchmove="draw"
          class="h-full w-full"
        ></canvas>
      </div>
    </div>
    <div v-else>
      <input id="file" type="file" class="hidden" />
      <label for="file" class="mx-auto mb-11 block w-11/12 rounded-xl bg-white">
        <p class="text-center leading-[200px] text-gray-400">請選擇檔案</p>
      </label>
    </div>

    <div class="text-center">
      <button class="btn-border mx-2" @click="reset">清除</button>
      <button class="btn-full save mx-2" @click="saveImage">建立簽名</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useSignStore } from "../stores/sign";

const tab = ref(true);
const pen = ref("#000000");

const canvas = ref(null);

const ctx = ref(null);
const isPainting = ref(false);

const getPaintPosition = (e) => {
  const canvasSize = canvas.value.getBoundingClientRect();

  if (e.type === "mousemove") {
    return {
      x: e.clientX - canvasSize.left,
      y: e.clientY - canvasSize.top,
    };
  } else {
    return {
      x: e.touches[0].clientX - canvasSize.left,
      y: e.touches[0].clientY - canvasSize.top,
    };
  }
};

// 開始繪圖時，將狀態開啟
const startPosition = (e) => {
  e.preventDefault();
  isPainting.value = true;
};

// 結束繪圖時，將狀態關閉，並產生新路徑
const finishedPosition = () => {
  isPainting.value = false;
  ctx.value.beginPath();
};

// 繪圖過程
const draw = (e) => {
  // 滑鼠移動過程中，若非繪圖狀態，則跳出
  if (!isPainting.value) return;

  // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
  const paintPosition = getPaintPosition(e);

  // 移動滑鼠位置並產生圖案
  ctx.value.lineTo(paintPosition.x, paintPosition.y);
  ctx.value.stroke();
};

onMounted(() => {
  ctx.value = canvas.value.getContext("2d");

  ctx.value.lineWidth = 4;
  ctx.value.lineCap = "round";
});
const reset = () => {
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
};

const signStore = useSignStore();
const router = useRouter();

const saveImage = () => {
  // 圖片儲存的類型選擇 png ，並將值放入 img 的 src
  const base64 = canvas.value.toDataURL("image/png");
  signStore.saveSignImg(base64);
  router.push("/contract");
};
</script>
