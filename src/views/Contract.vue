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
    <p class="p-2 text-primary">請選擇簽名</p>
    <div
      v-for="(base64, index) in signStore.signImg"
      :key="base64"
      class="my-2 flex items-center justify-around"
    >
      <div class="h-11 w-5/6 rounded-xl bg-white">
        <img class="h-full w-full object-contain" :src="base64" alt="" />
      </div>
      <i
        @click="signStore.deleteSignImg(index)"
        class="bx bx-trash text-2xl text-primary"
      ></i>
    </div>

    <p class="p-3 text-start text-primary">
      <router-link to="/sign">+ 新增簽名</router-link>
    </p>
  </Pop>
</template>

<script setup>
import { ref } from "vue";
import Pop from "../components/pop.vue";
import { useSignStore } from "../stores/sign";

const signStore = useSignStore();
const isPop = ref(false);
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
</script>
