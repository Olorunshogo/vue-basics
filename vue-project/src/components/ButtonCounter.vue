
<script lang="ts" setup>
  import { ref } from 'vue';

  // export default {
  //   name: 'ButtonCounter',
  // }

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
    <span>Count by {{ counterArg }}: &NonBreakingSpace;</span>
    <button @click="increment">You clicked me {{ count }} times.</button>
  </div>
</template>

<style scoped>

</style>
