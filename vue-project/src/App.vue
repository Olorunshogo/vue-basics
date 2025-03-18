<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const backToTop = ref();

  watch(
    () => route.path,
    () => {
      backToTop.value.focus()
    }
  )
</script>

<template>
  <div class="relative grid grid-cols-1 lg:grid-cols-[300px_minmax(900px,_1fr)_100px]">
    <header role="banner" class="flex flex-col items-center justify-between p-4 border-2 shadow-2xl border-slate-700 bg-slate-950 lg:min-h-dvw lg:flex-col lg:justify-start lg:p-8">
      <div class="flex flex-col mx-auto mb-8">
        <div>
          <span ref="backToTop" tabindex="-1"></span>
          <ul class="list-none">
            <li>
              <a href="#main" ref="skipLink"
                class="fixed mx-auto opacity-0 right-4/5 hover:cursor-pointer focus:cursor-pointer whitespace-nowrap focus:opacity-100 focus:bg-white focus:p-2 border-1 border-s-black"
              >
              Skip to main
              </a>
            </li>
          </ul>
        </div>

        <img alt="Vue logo" class="block" src="@/assets/logo.svg" width="125" height="125" />
      </div>

      <div class="p-2 lg:p-4">
        <!-- <HelloWorld msg="You did it!" /> -->

        <span></span>

        <nav role="navigation" class="flex items-center *:text-green-600 *:hover:border-transparent *:inline-block lg:text-left -ml-4 lg:flex-col *:lg:pb-4 *:text-sm *:lg:text-base lg:py-4 lg:mt-4 *:px-2 *:lg:px-4 *:text-center *:border-l-2 *:mx-auto *:active:text-gray-700 *:hover:outline-none">
          <RouterLink to="/" class="border-none">Home</RouterLink>
          <RouterLink to="/about" target="_blank">About</RouterLink>
          <RouterLink to="/testessential" target="_blank">Test Essentials</RouterLink>
          <RouterLink to="/testreusability" target="_blank">Test Reusability</RouterLink>
          <RouterLink to="/testbuiltin" target="_blank">Test BuiltIn</RouterLink>
          <RouterLink to="/extratopics" target="_blank">Extra Topics</RouterLink>
          <RouterLink to="/utilities" target="_blank">Utilities</RouterLink>
          <RouterLink to="/forms" target="_blank">Forms</RouterLink>
        </nav>
      </div>
    </header>


    <main role="main" aria-labelledby="component-body" class="p-4 lg:p-8 h-dvh w-5/5">
      <RouterView></RouterView>
    </main>
  </div>
</template>

