
<script lang="ts" setup>
  const slotProps = defineProps<{
    slotMsg: string;
    count: number;
  }>();
</script>

<template>
  <div>
    <div class="card">
      <header>
        <!-- We want header content here -->
        <div v-if="$slots.header" class="card-header">
          <slot name="header"></slot>
        </div>
      </header>
      <main>
        <!-- We want main content here -->
        <div v-if="$slots.default" class="card-content">
          <slot></slot>
        </div>
      </main>
      <footer>
        <!-- We want footer content here -->
        <div v-if="$slots.footer" class="card-footer">
          <slot name="footer"></slot>
        </div>
      </footer>
    </div>
  </div>
</template>



<!-- <style lang="css" scoped>
  .card {
    border: 1px solid black;
    padding: 0;
  }

  .card-header {
    background-color: skyblue;
    padding: 4px;
  }

  .card-content {
    padding: 4px;
  }

  .card-footer {
    background-color: lightgray;
    padding: 4px;
  }
</style> -->
