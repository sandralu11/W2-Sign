<template>
  <div class="relative h-screen">
    <header class="flex items-center justify-between px-8 py-5">
      <div class="">
        <img src="../assets/img/logo.png" alt="logo" />
      </div>
      <router-link class="btn-border" to="/record">歷史紀錄</router-link>
    </header>
    <main class="relative text-center">
      <label
        class="mx-8 block h-96 rounded-md border-4 border-dashed bg-white bg-origin-border p-4"
      >
        <img class="m-5 mx-auto" src="../assets/img/pdf_bg.png" alt="" />
        <input
          @change="pdfHandler"
          class="mx-auto block w-3/6 text-sm text-slate-500 file:mr-4 file:rounded-lg file:border-0 file:bg-gradient-to-b file:from-green-600 file:to-green-900 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white"
          type="file"
          accept="application/pdf"
          placeholder="選擇PDF"
        />
        <p class="mt-5 text-primary">(限10MB 內的PDF或JPG檔)</p>
      </label>
      <img
        class="absolute -bottom-32 left-0 right-0 mx-auto w-5/6"
        src="../assets/img/index-bg2.png"
        alt=""
      />
      <footer class="absolute -bottom-44 left-0 right-0 mx-auto text-center">
        <p>小綠簽 © Code: Sandra / Design: KT</p>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useSignStore } from "../stores/sign";
const pdfStore = useSignStore();
const Base64Prefix = "data:application/pdf;base64,";
const router = useRouter();
const readBlob = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
};
const pdfHandler = async (e) => {
  const file = e.target.files[0];
  const pdfData = await readBlob(file);
  const data = pdfData.substring(Base64Prefix.length);
  pdfStore.pdf.name = file.name;
  pdfStore.pdf.url = data;
  router.push("/sign");
};
</script>
