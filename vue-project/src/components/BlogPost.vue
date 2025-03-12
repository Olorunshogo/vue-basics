
<script lang="ts" setup>
  const props = defineProps<{
    title: String,
    likes?: Number,
    author: {
      name: String,
      company: String
    },
    buttontext: string
  }>();
  const emit = defineEmits([ 'enlarge-text', 'alert-text' ]);
</script>

<template>
  <div>
    <h4>{{ props.title }}</h4>
    <p>Likes: <span>{{ props.likes }}</span></p>
    <p>Author:
      <span>{{ author.name }}</span>&NonBreakingSpace;
      <span>{{ author.company }}</span>
    </p>
    <!-- <button @click="$emit('enlarge-text')">{{ buttontext }}</button> -->
     <button @click="$emit('alert-text')">{{ buttontext }}</button>
  </div>
</template>

<style scoped>

</style>
