
<script lang="ts" setup>
  import { inject, ref } from 'vue';

  const messages = inject('messages');
  const provideCount = inject('provideCount');
  const provideCounter = ref<number>(0);
</script>

<template>
  <div>
    <!-- Provide / Inject -->
    <h3>Provide and Inject Grandchild</h3>
    <p>Message to the component's grandchildren is: {{ messages }}</p>
  </div>
</template>



<style lang="css" scoped>
</style>
