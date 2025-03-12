
<script lang="ts" setup>

</script>

<template>
  <div>
    <button class="fancy-btn">
      <slot>Rename Slot Fancy Button</slot>
    </button>
  </div>
</template>


<style lang="css" scoped>
  .fancy-btn {
    border: 1px solid grey;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    text-align: center;
    display: inline-flex;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>
