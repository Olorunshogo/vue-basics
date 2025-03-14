
<script lang="ts" setup>
  import { ref, shallowRef } from 'vue';

  import AlertBox from './AlertBox.vue';
  import ErrorComponent from './ErrorComponent.vue';


  const fade = ref<boolean>(true);
  const slow = ref<boolean>(true);
  const bounce = ref<boolean>(true);
  const animatecss = ref<boolean>(true);
  const transitionAnimation = ref<boolean>(true);

  const activeComponent = shallowRef(AlertBox);

  const transitionCount = ref<number>(0);
  setInterval(() => {
    transitionCount.value+=2;
  }, 1000)
</script>

<template>
  <div>
    <div class="relative mt-6">
      <h1 class="text-center font-bold text-2xl">Built-In Components</h1>

      <!-- Transition -->
      <div>
        <h2 class="text-center font-semibold my-2 text-xl">Transition</h2>

        <div class="flex gap-4 flex-wrap">
          <div>
            <button class="transition-btn" @click="fade = !fade">Toggle fade</button>
            <Transition name="fade">
              <p v-show="fade">Hello</p>
            </Transition>
          </div>

          <div>
            <button class="transition-btn" @click="slow = !slow">Toggle Slide + Fade</button>
            <Transition name="slide-fade">
              <p v-show="slow">Slide + Fade</p>
            </Transition>
          </div>

          <div>
            <button class="transition-btn text-center" @click="bounce = !bounce">Toggle Slide + Fade</button>
            <Transition name="bounce">
              <p v-show="bounce">Here is some bouncy text</p>
            </Transition>
          </div>

          <div>
            <button class="transition-btn text-center" @click="animatecss = !animatecss">Animate.css </button>
            <Transition
              name="custom-classes"
              enter-active-class="animate_animated animate_tada"
              leave-active-class="animate_animated animate_bounceOutRight"
            >
              <p v-show="animatecss">Toggle Animate.css</p>
            </Transition>
          </div>

          <!-- Transition + Animation -->
          <div>
            <button class="transition-btn" @click="transitionAnimation = !transitionAnimation">Nested Transition + Animation </button>
            <Transition type="animation" name="nested" :duration="{ enter: 550, leave: 800 }">
              <div v-show="transitionAnimation" class="outer bg-slate-400 p-4">
                <div class="inner w-2xs bg-slate-300 p-8">
                  <p>Nested Transition + Animation</p>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Transition Modes -->
          <div>
            <MyTransition />
          </div>

          <div>
            <div class="flex items-center gap-8">
              <label for="alertBox">
                <input type="radio" name="alertBox" id="alertBox" v-model="activeComponent" :value="AlertBox">
                AlertBox
              </label>
              <label for="mouseTracker">
                <input type="radio" name="errorComponent" id="errorComponent" v-model="activeComponent" :value="ErrorComponent">
                Error Component
              </label>
            </div>
            <!-- Transition Between Components -->
            <Transition name="fade" mode="out-in">
              <component :is="activeComponent"></component>
            </Transition>
          </div>

          <!-- Dynamic transitions -->
          <div>
            <Transition name="fade" mode="in-out">
              <span :key="transitionCount">{{ transitionCount }}</span>
            </Transition>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>



<style lang="css" scoped>
  /* Fade */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* Slide + Fade */
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1)
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translate(20px);
    opacity: 0;
  }

  /* Bounce */
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      tranform: scale(0)
    }
    50% {
      transform: scale(1.25)
    }
    100% {
      transform: scale(1);
    }
  }

  /* Nested Transition + Animation */
  .nested-enter-active .inner,
  .nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
    transition-delay: 0.55s;
  }
  .nested-enter-from .inner,
  .nested-leave-to .inner {
    transform: translate(30px);
    opacity: 0;
  }
</style>
