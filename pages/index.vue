<template>
  <div id="fullpage" class="w-full">
    <div
      class="section bg-black text-white flex items-center justify-center w-full"
    ></div>
    <div
      class="section bg-red-500 text-white flex items-center justify-center w-full"
    ></div>
    <div
      class="section bg-blue-500 text-white flex items-center justify-center w-full"
    ></div>
    <div
      class="section bg-green-500 text-white flex items-center justify-center w-full"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

let fullpageInstance; // 定义 FullPage.js 实例变量

onMounted(() => {
  // 初始化 FullPage.js
  fullpageInstance = new fullpage("#fullpage", {
    navigation: true, // 显示右侧导航
    scrollBar: false, // 是否启用滚动条
    afterLoad: (origin, destination, direction) => {
      console.log("Loaded section:", destination.index); // 打印加载的页索引
    },
  });

  // 将实例绑定到 window
  window.fullpage = fullpageInstance;
});

onBeforeUnmount(() => {
  // 销毁 FullPage.js 实例
  if (fullpageInstance) {
    fullpageInstance.destroy("all");
    fullpageInstance = null;
    window.fullpage = null;
  }
});
</script>

<style scoped>
/* 设置全屏样式 */
#fullpage {
  height: 100vh;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-align: center;
  height: 100vh;
}
</style>
