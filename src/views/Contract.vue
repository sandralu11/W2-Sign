<template>
  <div class="h-screen">
    <div class="flex p-4">
      <div
        class="mr-2 flex w-3/5 items-center justify-around rounded-lg bg-white"
      >
        <span class="rounded-lg bg-primary py-1 px-2 text-white"
          ><i class="bx bxs-chevron-left"></i
        ></span>
        <span>1/2</span>
        <span class="rounded-lg bg-primary py-1 px-2 text-white"
          ><i class="bx bxs-chevron-right"></i
        ></span>
      </div>
      <button @click="savePdf" class="btn-full w-2/5">
        <span>完成簽屬</span>
      </button>
    </div>
    <div class="mx-auto mb-5 h-[450px] w-11/12 overflow-scroll">
      <canvas id="canvas"> </canvas>
    </div>

    <div
      class="mx-auto flex w-11/12 justify-around rounded-lg bg-white p-2 text-center text-gray-500"
    >
      <div
        v-for="item in iconList"
        :key="item.title"
        @click="btnHandler(item.title)"
        class="rounded-md bg-gray-200 px-3 py-2"
        :class="{
          'bg-primary bg-gradient-to-b  from-green-600 to-green-900 text-white':
            icon === item.title,
        }"
      >
        <i class="bx" :class="item.icon"></i>
        <p>
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
  <Pop v-if="isPop" :closeHandler="closePop">
    <template v-if="errMsg">
      <div class="text-center">
        <p>{{ errMsg }}</p>
        <router-link class="btn-full mx-auto block w-2/5" to="/" replace
          >確定</router-link
        >
      </div>
    </template>
    <template v-else>
      <p class="p-2 text-primary">請選擇簽名</p>
      <div
        v-for="(base64, index) in signStore.signImg"
        :key="base64"
        class="my-2 flex items-center justify-around"
      >
        <div class="h-11 w-5/6 rounded-xl bg-white">
          <img
            @click="signHandler(base64)"
            class="h-full w-full object-contain"
            :src="base64"
            alt=""
          />
        </div>
        <i
          @click="signStore.deleteSignImg(index)"
          class="bx bx-trash text-2xl text-primary"
        ></i>
      </div>

      <p class="p-3 text-start text-primary">
        <router-link to="/sign">+ 新增簽名</router-link>
      </p>
    </template>
  </Pop>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Pop from "../components/pop.vue";
import { useSignStore } from "../stores/sign";
const signStore = useSignStore();
const router = useRouter();

const errMsg = ref("");

const isPop = ref(false);
if (!signStore.pdf.url) {
  errMsg.value = "未有可簽名pdf";
  isPop.value = true;
}

const closePop = () => {
  isPop.value = false;
};
const btnHandler = (title) => {
  icon.value = title;
  if (title === "簽名") {
    isPop.value = true;
  }
};
const icon = ref("");
const iconList = [
  {
    icon: "bxs-edit-alt",
    title: "簽名",
  },
  {
    icon: "bx-check",
    title: "勾選",
  },
  {
    icon: "bx-calendar",
    title: "日期",
  },
  {
    icon: "bx-text",
    title: "插入文字",
  },
];

let fabricCanvas = null;
const canvasHandler = async () => {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://mozilla.github.io/pdf.js/build/pdf.worker.js";
  fabricCanvas = new fabric.Canvas("canvas");
  fabricCanvas.requestRenderAll();
  const data = atob(signStore.pdf.url);
  const pdfDoc = await pdfjsLib.getDocument({ data }).promise;
  const pdfPage = await pdfDoc.getPage(1);
  const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio });
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  const renderContext = {
    canvasContext: context,
    viewport,
  };
  const renderTask = pdfPage.render(renderContext);
  await renderTask.promise;
  const scale = 1 / window.devicePixelRatio;

  const pdfImage = new fabric.Image(canvas, {
    id: "renderPDF",
    scaleX: scale,
    scaleY: scale,
  });
  // 透過比例設定 canvas 尺寸
  fabricCanvas.setWidth(pdfImage.width / window.devicePixelRatio);
  fabricCanvas.setHeight(pdfImage.height / window.devicePixelRatio);

  // 將 PDF 畫面設定為背景
  fabricCanvas.setBackgroundImage(
    pdfImage,
    fabricCanvas.renderAll.bind(fabricCanvas)
  );
};

onMounted(canvasHandler);

//圖片在被按下去後可以放在 PDF 上
const signHandler = (base64) => {
  fabric.Image.fromURL(base64, function (image) {
    // 設定簽名出現的位置及大小，後續可調整
    image.top = 400;
    image.scaleX = 0.5;
    image.scaleY = 0.5;
    fabricCanvas.add(image);
    isPop.value = false;
  });
};
// 下讚PDF
const savePdf = () => {
  // 將 canvas 存為圖片
  const image = fabricCanvas.toDataURL("image/png");
  signStore.finalPdf = image;
  router.push("/save");
};
</script>
