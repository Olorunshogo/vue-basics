
<script lang="ts" setup>
import { ref } from 'vue';
  // Composables
  import { useFetch } from '../composables/fetch';
  const url = 'https://example.com/api/data';
  const { data, error, loading } = useFetch(url);

</script>

<template>
  <div>
    <div>
      <h1>Vue Reusability</h1>

      <!-- Composables -->
      <div>
        <h2>Composables</h2>
        <MouseTracker />
        <!-- Async State Example -->
        <div>
          <p v-if="loading">Loading...</p>
          <p v-if="error">{{ error.message }}</p>
          <p v-if="data">{{ data }}</p>
        </div>

      </div>
    </div>
  </div>
</template>



<style lang="css" scoped>
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  label {
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
  }

  input {
    margin: 0.5rem 0;
  }
</style>
