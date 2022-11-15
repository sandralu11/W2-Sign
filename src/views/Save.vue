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
    <div class="mx-auto mb-5 h-[450px] w-11/12 bg-white">簽屬文件</div>
    <router-link
      to="/save"
      class="mx-auto block w-4/6 rounded-lg bg-primary bg-gradient-to-b from-green-600 to-green-900 py-4 text-center text-white"
      >儲存</router-link
    >
  </div>
</template>
