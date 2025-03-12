
<script lang="ts" setup>
  import { ref } from 'vue';

  const props = defineProps({
    counterArg: {
      type: Number,
      required: true,
    },
  });

  const count = ref(0);
  function increment() {
    count.value += props.counterArg
  }
</script>

<template>
  <div>
    <span>Count by {{ counterArg }}: &NonBreakingSpace;</span> <span>You clicked me {{ count }} times.</span>
    <button @click="increment">
      <slot>Slot</slot>
    </button>
  </div>
</template>

<style scoped>

</style>
