
<script lang="ts" setup>
  // export default {
  //   name: 'AlertBox'
  // }
</script>

<template>
  <div>
    <div class="alert-box">
      <div>
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
      <div>
        <span>This is an Error for Demo Purposes</span>
        <!-- <p>Something bad happened</p> -->
        <slot>This is the default value of this slot component</slot>
      </div>
    </div>
  </div>
</template>



<style scoped>
  .alert-box {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    padding: 1rem;
    border: 1px solid rgb(214, 75, 75);;
    border-radius: 0.5rem;
    max-width: 600px;
    margin: 0.5rem auto;
  }

  .alert-box i,
  .alert-box span {
    color: rgb(214, 75, 75);
  }

  .alert-box > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .alert-box span {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .alert-box p {
    color: rgb(172, 161, 161);
    font-size: 1.1rem;
    font-weight: 600;
  }
</style>
