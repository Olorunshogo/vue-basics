

<script lang="ts" setup>
  import { useMouse, useInterval, useEventSource } from '@vueuse/core';
  import { othertopics } from '../stores/othertopics';
  import { watchEffect } from 'vue';

  const { x, y } = useMouse();

  watchEffect(() => {
    othertopics.x = x.value;
    othertopics.y = y.value;
  });
  const counter = useInterval(3000);



</script>

<template>
  <div>
    <h1 class="my-4 text-2xl font-bold text-center text-white">Other Topics</h1>

      <!-- Utilities -->
      <div>
        <h2 class="my-2 text-xl font-semibold text-center">Utilities</h2>

        <div class="gap-4 gridflex-wrap ">
          <!-- VueUse Example -->
          <div>
            <h3 class="text-lg font-medium text-left">VueUse Example</h3>

            <!-- useMouse() -->
            <div>
              <p>Position is: {{ othertopics.x }}, {{ othertopics.y }}</p>
            </div>

            <!-- useAnimate -->
            <!-- <div>
              <div class="flex items-center justify-center w-full h-60">
                <p ref="el" class="text-5xl! text-yellow-600 items-center font-extrabold">VueUse Animate</p>
              </div>

              <div>
                <button v-if="playState === 'running'" class="transition-btn" @click="pause">
                  Pause
                </button>
                <button v-else @click="play">
                  Play
                </button>
                <button @click="reverse">
                  Reverse
                </button>
                <button @click="finish">
                  Finish
                </button>
                <button @click="cancel">
                  Cancel
                </button>
              </div>

              <pre class="code-block">{{ text }}</pre>

            </div> -->

            <!-- useInterval() -->
            <div>
              <p>Interval fired: {{ counter }}</p>
            </div>




          </div>





        </div>
      </div>
  </div>
</template>

<style lang="css" scoped>


</style>
