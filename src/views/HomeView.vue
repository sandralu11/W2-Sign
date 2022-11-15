<script setup></script>

<template>
  <div class="relative h-screen">
    <header class="flex items-center justify-between px-8 py-5">
      <div class="">
        <img src="../assets/img/logo.png" alt="logo" />
      </div>
      <div class="btn-border">
        <a href="#">歷史紀錄</a>
      </div>
    </header>
    <main class="main-page-height relative text-center">
      <div
        class="mx-8 h-96 rounded-md border-4 border-dashed bg-white bg-origin-border p-4"
      >
        <img class="m-5 mx-auto" src="../assets/img/pdf_bg.png" alt="" />
        <router-link
          to="/sign"
          class="m-5 rounded-lg bg-primary bg-gradient-to-b from-green-600 to-green-900 py-3 px-10 text-white"
          >選擇檔案</router-link
        >

        <p class="mt-5 text-primary">(限10MB 內的PDF或JPG檔)</p>
      </div>
      <img
        class="absolute bottom-0 w-96"
        src="../assets/img/index-bg2.png"
        alt=""
      />
    </main>
    <footer class="text-center">
      <p>小綠簽 © Code: Sandra / Design: KT</p>
    </footer>
  </div>
</template>
