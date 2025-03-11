
<script lang="ts" setup>
  defineProps(['title']);
  defineEmits(['enlarge-text']);

  // export default {
  //   name: 'BlogPost'
  // }
</script>

<template>
  <div>
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

<style scoped>

</style>
