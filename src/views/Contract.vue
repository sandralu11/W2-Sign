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
      <router-link to="/save" class="btn-full w-2/5">完成簽屬</router-link>
    </div>
    <div class="mx-auto mb-5 h-[450px] w-11/12 bg-white">簽屬文件</div>
    <div
      class="mx-auto flex w-11/12 justify-around rounded-lg bg-white p-2 text-center"
    >
      <div>
        <div class="rounded-md bg-gray-200 px-3 py-2">
          <span class="text-gray-500"><i class="bx bxs-edit-alt"></i></span>
        </div>
        <p class="text-gray-500">簽名</p>
      </div>
      <div>
        <div class="rounded-md bg-gray-200 px-3 py-2">
          <span class="text-gray-500"><i class="bx bx-check"></i></span>
        </div>
        <p class="text-gray-500">勾選</p>
      </div>
      <div>
        <div class="rounded-md bg-gray-200 px-3 py-2">
          <span class="text-gray-500"><i class="bx bx-calendar"></i></span>
        </div>
        <p class="text-gray-500">日期</p>
      </div>
      <div>
        <div class="rounded-md bg-gray-200 px-3 py-2">
          <span class="text-gray-500"><i class="bx bx-text"></i></span>
        </div>
        <p class="text-gray-500">插入文字</p>
      </div>
    </div>
  </div>
</template>
