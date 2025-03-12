
<script lang="ts" setup>
  const props = defineProps<{
    title: String,
    likes?: Number,
    author: {
      name: String,
      company: String
    }
  }>();
  defineEmits(['enlarge-text']);
</script>

<template>
  <div>
    <h4>{{ props.title }}</h4>
    <p>Likes: <span>{{ props.likes }}</span></p>
    <p>Author:
      <span>{{ author.name }}</span>&NonBreakingSpace;
      <span>{{ author.company }}</span>
    </p>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

<style scoped>

</style>
