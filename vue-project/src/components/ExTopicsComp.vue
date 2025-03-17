
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue';
  import gasp from 'gsap';

  // Class-based Animations
  const disabled = ref<boolean>(false);

  function warnDisabled() {
    disabled.value = true
    setTimeout(() => {
        disabled.value = false;
    }, 1500)
  }

  // State-driven Animations
  const x = ref<number>(564);
  const y = ref<number>(644);


  const number = ref(0);
  const tweened = reactive({
    number: 0
  });
  function onMousemove(e: MouseEvent) {
    x.value = e.clientX
    y.value = e.clientY
  };

  watch(
    number,
    (n) => {
      gasp.to(tweened, { duration: 0.5, number: Number(n) || 0 })
    }
  );



</script>

<template>
  <div>
    <h1 class="my-4 text-2xl font-bold text-center text-white">Extra Topics</h1>

      <!-- Transition -->
      <div>
        <h2 class="my-2 text-xl font-semibold text-center">Animation Techniques</h2>

        <div class="gap-4 gridflex-wrap ">
          <!-- Class-based Animations -->
          <div>
            <h3 class="text-lg font-medium text-left">Class-based Animations</h3>

            <div :class="{ shake: disabled }">
              <button class="transition-btn" @click="warnDisabled">Click Me</button>
              <span v-if="disabled" class="w-4/5 px-4 py-2 ml-8 text-xl text-black bg-white rounded-md font lg:w-3xs">This feature is disabled</span>
            </div>
          </div>

          <!-- State-driven Animations -->
          <div>
            <h3 class="text-lg font-medium text-left">State-based Animations</h3>

            <div
              @mousemove="onMousemove"
              :style=" { backgroundColor: `hsl(${x}, 80%, 20%, 90%)` }"
              class="grid h-40 gap-4 p-4 text-base font-semibold rounded-xl mousemove"
            >
              <p>
                The value of x is:
                <span class="px-4 py-2 ml-8 text-xl text-black bg-white rounded-md font lg:w-3xs"> {{ x }}</span>
              </p>

              <p>
                The value of y is:
                <span class="px-4 py-2 ml-8 text-xl text-black bg-white rounded-md font lg:w-3xs"> {{ y }}</span>
              </p>
            </div>

            <!-- Drag Me Example -->
            <div
              class="my-4"
            >
              <label for="number" class="flex items-center gap-4">
                <span>Type a number: </span>
                <input
                  type="number" name="number" id="number" v-model.number="number" placeholder="0"
                  class="px-4 py-2 rounded-lg shadow-2xl border-1"
                  />
              </label>
              <p class="text-4xl font-bold">{{ tweened.number.toFixed(0) }}</p>
            </div>

          </div>



        </div>
      </div>
  </div>
</template>

<style lang="css" scoped>

  .shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  .movearea {
    transition: 0.3s background-color ease;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
</style>



