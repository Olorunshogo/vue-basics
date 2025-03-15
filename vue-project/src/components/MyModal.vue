
<script lang="ts" setup>
  import { ref } from 'vue';

  const open = ref<boolean>(false);
  const props = defineProps({
    open: Boolean,
    showModal: Boolean
  });
</script>

<template>
  <div class="relative rounded-md mx-auto flex">
    <div>
      <div class="transition-btn">
        <button @click="open = true">Open Modal</button>
      </div>

      <div v-if="open" class="fixed flex justify-between z-999 top-1/5 left-1/2 w-xs -ml-40 bg-black/80 text-white border-1 p-8 rounded-md text-base lg:text-xl shadow-md lg:shadow-2xl">
        <p>Hello from the modal!</p>
        <button @click="open = false" class="text-red-600 text-sm relative -top-6 left-2">Close x</button>
      </div>
    </div>

    <Transition name="modal">
      <div v-if="showModal" class="fixed 9998 top-0 left-0 w-full h-full bg-black/50 flex transition-opacity duration-300 ease">
        <div class="m-auto py-6 px-12 w-80 rounded-md bg-transparent shadow-md">
          <div class="mt-0 text-[#42B983]">
            <slot name="header">Default Header</slot>
          </div>

          <div class="my-6">
            <slot name="body">Default Body</slot>
          </div>

          <div class="">
            <slot name="footer">Default Footer</slot>
            <button class="float-right w-42 text-red-600 text-sm relative -bottom-8 left-2" @click="$emit('close')">Ok / Close</button>
          </div>
        </div>
      </div>
    </Transition>


  </div>
</template>

<style lang="css" scoped>
  .modal-enter-from {
    opacity: 0;
  }

  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>


