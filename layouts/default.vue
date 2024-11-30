<template>
  <div class="min-h-screen bg-black text-white flex flex-col">
    <!-- Header -->
    <div class="fixed inset-x-0 top-0 z-50">
      <header
        class="flex items-center h-24 px-4 bg-transparent bg-opacity-80 relative max-w-screen-xl w-full mx-auto"
      >
        <!-- Navigation Links (Left) -->
        <nav class="flex items-center space-x-8 absolute left-2">
          <nuxt-link
            to="/"
            class="text-white text-sm opacity-80 hover:opacity-100 transition duration-300 hover:underline relative group"
            exact-active-class="font-bold border-b-2 border-cyan-500"
          >
            首页
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="text-white text-sm opacity-80 hover:opacity-100 transition duration-300 hover:underline relative group"
            exact-active-class="font-bold border-b-2 border-cyan-500"
          >
            关于我们
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </nuxt-link>
          <nuxt-link
            to="/services"
            class="text-white text-sm opacity-80 hover:opacity-100 transition duration-300 hover:underline relative group"
            exact-active-class="font-bold border-b-2 border-cyan-500"
          >
            服务
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="text-white text-sm opacity-80 hover:opacity-100 transition duration-300 hover:underline relative group"
            exact-active-class="font-bold border-b-2 border-cyan-500"
          >
            联系我们
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </nuxt-link>
        </nav>

        <!-- Logo (Centered) -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="flex flex-col items-center hover:scale-105 transition">
            <img src="/logo.svg" alt="Logo" class="h-8 w-auto" />
            <div class="text-xs font-bold">广景广告设计</div>
          </div>
        </div>

        <nav class="flex items-center space-x-8 absolute right-2">
          <nuxt-link
            to="/"
            class="text-white text-sm opacity-80 hover:opacity-100 transition duration-300 hover:underline relative group"
            exact-active-class="font-bold border-b-2 border-cyan-500"
          >
            首页
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="text-white text-sm opacity-80 hover:opacity-100 transition duration-300 hover:underline relative group"
            exact-active-class="font-bold border-b-2 border-cyan-500"
          >
            关于我们
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </nuxt-link>
          <nuxt-link
            to="/services"
            class="text-white text-sm opacity-80 hover:opacity-100 transition duration-300 hover:underline relative group"
            exact-active-class="font-bold border-b-2 border-cyan-500"
          >
            服务
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="text-white text-sm opacity-80 hover:opacity-100 transition duration-300 hover:underline relative group"
            exact-active-class="font-bold border-b-2 border-cyan-500"
          >
            联系我们
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </nuxt-link>
        </nav>
      </header>
    </div>

    <!-- Main Content -->
    <main
      class="flex-1 flex shrink-0 flex-col items-center justify-center text-center h-screen"
    >
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="text-center py-4 bg-black text-gray-500">
      &copy; {{ new Date().getFullYear() }} Your Project. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// 如果需要其他逻辑，可以在此定义
</script>

<style scoped>
img {
  display: block;
}
</style>
