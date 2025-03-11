
<script lang="ts" setup>
  import { ref } from 'vue';

  const title = ref<string>('Attribute Binding');
  const isRed = ref<boolean>(true);
  const color = ref<string>('green');
  const isButtonDisabled = ref<boolean>(false);
  const googleLink = ref<string>('https://google.com/');
  function toggleRed() {
    isRed.value = !isRed.value;
  }
  function toggleColor() {
    color.value = color.value === 'green' ? 'blue' : 'red';
  }
  function toggleDisable() {
    isButtonDisabled.value = !isButtonDisabled.value
  }

</script>

<template>
  <div>
    <h2>Essential Test</h2>

    <!-- Template Syntax -->
    <div>
      <h3>Template Syntax</h3>
      <p>
        <span :title="title">Hover over this paragraph to see the dynamically bound title!</span>
      </p>

      <p :class="{ red: isRed }" @click="toggleRed">
        This should be red...but click to toggle the color.
      </p>

      <p v-if="isRed" :class="{ color }" @click="toggleColor">
        This should be green, and should toggle between red and blue on click.
        <a :href="googleLink" target="_blank">Google</a>
      </p>

      <button :disabled="isButtonDisabled" @click="toggleDisable">Button</button>
      <form action="" @submit.prevent="onSubmit"></form>
    </div>

    
  </div>
</template>



<style scoped>
 h2 {
  text-align: center;
  font-weight: 600;
  margin-top: 1.5rem;
  font-size: 1.2rem;
 }

 /* Template Syntax */
 .red {
  color: red;
 }
</style>
