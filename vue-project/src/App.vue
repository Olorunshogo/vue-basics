<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="relative grid grid-cols-1 lg:grid-cols-[300px_minmax(900px,_1fr)_100px]">
    <header class="border-2 border-slate-700 bg-slate-950 lg:min-h-dvw shadow-2xl flex flex-col lg:flex-col justify-between items-center lg:justify-start p-4 lg:p-8">
      <div class="flex mx-auto mb-8">
        <img alt="Vue logo" class="block" src="@/assets/logo.svg" width="125" height="125" />
      </div>

      <div class="p-2 lg:p-4">
        <!-- <HelloWorld msg="You did it!" /> -->

        <nav class="flex items-center *:text-green-600 *:hover:border-transparent *:inline-block lg:text-left -ml-4 lg:flex-col *:lg:pb-4 *:text-sm *:lg:text-base lg:py-4 lg:mt-4 *:px-2 *:lg:px-4 *:text-center *:border-l-2 *:mx-auto *:active:text-gray-700 *:hover:outline-none">
          <RouterLink to="/" class="border-none">Home</RouterLink>
          <RouterLink to="/about" target="_blank">About</RouterLink>
          <RouterLink to="/testessential" target="_blank">Test Essentials</RouterLink>
          <RouterLink to="/testreusability" target="_blank">Test Reusability</RouterLink>
          <RouterLink to="/testbuiltin" target="_blank">Test BuiltIn</RouterLink>
        </nav>
      </div>
    </header>


    <div class="p-4 lg:p-8 h-dvh w-5/5">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>



</style>
