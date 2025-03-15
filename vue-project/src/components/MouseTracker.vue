
<script lang="ts" setup>
  import { useMouse } from '../composables/mouse';
  import { store } from '../stores/store'

  const { x, y } = useMouse();
</script>

<template>
  <div>
    <p><span>Mouse position is at: </span>
      <!-- <span><slot :x="x" :y="y"></slot></span> -->
      <span>{{ x }}, {{ y }}</span>
    </p>
  </div>
</template>



<style lang="css" scoped>

</style>
