
<script lang="ts" setup>
  import { ref } from 'vue';

  const docState = ref<string>('Saved');
</script>

<template>
  <div>
    <p class="">Click to cycle through states: </p>
    <!-- <Transition name="slide-up" mode="out-in"> -->
    <Transition name="slide-up" mode="out-in">
      <button
        class="transition-btn"
        v-if="docState === 'Saved'" @click="docState = 'Edited'"
      >
        Edit
      </button>
      <button
        class="transition-btn"
        v-else-if="docState === 'Edited'" @click="docState = 'Editing'"
      >
        Saved
      </button>
      <button
        class="transition-btn"
        v-else-if="docState === 'Editing'" @click="docState = 'Saved'"
      >
        Cancel
      </button>
    </Transition>
  </div>
</template>



<style lang="css" scoped>
  .btn-container {
    display: inline-block;
    position: relative;
    height: 1em;
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.25s ease-out;
  }

  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
</style>
