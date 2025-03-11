
<script lang="ts" setup>
  defineEmits(['remove']);
  defineProps(['title']);
</script>

<template>
  <div>
    <ul>
      <li>
        <label for="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" v-model="todo.done">
        </label>
        {{ title }}
        <button @click="$emit('remove')">Remove</button>
      </li>
    </ul>
  </div>
</template>

