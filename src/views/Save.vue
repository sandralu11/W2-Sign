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
      <router-link to="/" class="btn-border w-2/5 text-center"
        >回首頁</router-link
      >
    </div>
    <div class="mx-auto mb-5 h-[450px] w-11/12 overflow-scroll">
      <img :src="pdfUrl" alt="" />
    </div>
    <button
      @click="download()"
      class="mx-auto block w-4/6 rounded-lg bg-primary bg-gradient-to-b from-green-600 to-green-900 py-4 text-center text-white"
    >
      儲存
    </button>
  </div>
  <Pop v-if="isPop" :closeHandler="closePop">
    <div class="text-center">
      <p>未有已簽名pdf</p>
      <router-link class="btn-full mx-auto block w-2/5" to="/" replace
        >確定</router-link
      >
    </div>
  </Pop>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Pop from "../components/pop.vue";
import { useSignStore } from "../stores/sign";
const signStore = useSignStore();

const isPop = ref(false);

const closePop = () => {
  isPop.value = false;
};
const props = defineProps(["histroyPdf"]);

const pdfUrl = props.histroyPdf
  ? signStore.historyPdf[parseInt(props.histroyPdf)].url
  : signStore.finalPdf;

if (!pdfUrl) {
  isPop.value = true;
}

let pdf = "";
onMounted(() => {
  pdf = new jsPDF();
});

const download = () => {
  // 設定背景在 PDF 中的位置及大小
  const width = pdf.internal.pageSize.width;
  const height = pdf.internal.pageSize.height;
  if (props.histroyPdf) {
    pdf.addImage(
      signStore.historyPdf[parseInt(props.histroyPdf)].url,
      "png",
      0,
      0,
      width,
      height
    );
    pdf.save(signStore.historyPdf[parseInt(props.histroyPdf)].name);
  } else {
    pdf.addImage(signStore.finalPdf, "png", 0, 0, width, height);
    pdf.save(`已簽名` + signStore.pdf.name);
    signStore.savePdf({
      name: `已簽名` + signStore.pdf.name,
      url: signStore.finalPdf,
    });
  }
};
</script>
