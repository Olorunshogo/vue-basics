
<script lang="ts" setup>
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
</style>
