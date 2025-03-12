
<script lang="ts" setup>
  // Component v-model
  // const modelMessage = defineModel('modelMessage');
  const modelMessage = defineModel('modelMessage');
  const compTitle = defineModel('compTitle');
</script>

<template>
  <div>
    <div>
      <label for="model">
        <input v-model="modelMessage" type="text" name="modelMessage" id="modelMessage">
      </label>
    </div>

    <div>
      <label for="title">
        <input v-model="compTitle" type="text" name="title" id="title">
      </label>
    </div>
  </div>
</template>



<style lang="css" scoped>
  input {
    border: 1px solid grey;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
</style>
