
<script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const x = ref<number>(0);
  const y = ref<number>(0);

  const update = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => window.addEventListener('mouseover', update))
  onUnmounted(() => window.addEventListener('mousemove', update))
</script>

<template>
  <div>
    <slot :x="x" :y="y"></slot>
  </div>
</template>



<style lang="css" scoped>

</style>
