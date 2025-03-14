

<!--
  FLIP list transitions with the built-in <TransitionGroup>.
  https://aerotwist.com/blog/flip-your-animations/
-->

<script lang="ts" setup>
  import { ref, shallowRef, computed, onActivated, onDeactivated } from 'vue';

  // Transition
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
  }, 1000);

  // Transition Group
  import { shuffle as _shuffle } from 'lodash-es';

  const getInitialItems = ():number[] => [1, 2, 3, 4, 5];
  const items = ref<number[]>(getInitialItems());
  let id: number = items.value.length + 1;

  function add(): void {
    const i: number = Math.floor(Math.random() * items.value.length)
    items.value.splice(i, 0, id++)
  }

  function reset(): void {
    items.value = getInitialItems();
    id = items.value.length + 1;
  }

  function shuffle() {
    items.value = _shuffle(items.value);
  }

  function remove(item: number): void {
    const i = items.value.indexOf(item);
    if (i > -1) {
      items.value.splice(i, 1)
    }
  }

  // GSAP query
  import gsap from 'gsap';

  interface ActorList {
    actorName: string;
  }

  const actorList: ActorList[] = [
    { actorName: 'Bruce Lee' },
    { actorName: 'Jackie Chan' },
    { actorName: 'Chuck Norris' },
    { actorName: 'Jet Li' },
    { actorName: 'Kung Fury' }
  ];

  const query = ref<string>('');

  const computedList = computed<ActorList[]>(() => {
    return actorList.filter((actor) =>
      actor.actorName.toLowerCase().includes(query.value));
    // return actorList.filter((actor) =>
    //   actor.actorName.includes(query.value));
  });

  function onBeforeEnter(el: Element): void {
    (el as HTMLElement).style.opacity = '0';
  }

  function onEnter(el: Element, done: () => void): void {
    gsap.to(el, {
      opacity: 1,
      height: '1.6em',
      delay: parseFloat(el.getAttribute('data-index') || '0') * 0.15,
      onComplete: done
    })
  }

  function onLeave(el: Element, done: () => void): void {
    gsap.to(el, {
      opacity: 0,
      height: 0,
      delay: parseFloat(el.getAttribute('data-index') || '0') * 0.15,
      onComplete: done
    })
  }

  // KeepAlive
  const keepActiveComponent = shallowRef(AlertBox);

  // Simulating some component change
  setTimeout(() => {
    keepActiveComponent.value = AlertBox;
  }, 5000)

  onActivated(() => {
    console.log('Component has been activated');
  });

  onDeactivated(() => {
    console.log('Component has been deactivated');
  })

</script>

<template>
  <div>
    <div class="relative mt-6">
      <h1 class="text-center font-bold text-2xl">Built-In Components</h1>

      <!-- Transition -->
      <div>
        <h2 class="text-center font-semibold my-2 text-xl">Transition</h2>

        <div class="flex gap-4 flex-wrap">
          <!-- Toggle Fade -->
          <div>
            <button class="transition-btn" @click="fade = !fade">Toggle fade</button>
            <Transition name="fade">
              <p v-show="fade">Hello</p>
            </Transition>
          </div>

          <!-- Toggle Slide + Fade -->
          <div>
            <button class="transition-btn" @click="slow = !slow">Toggle Slide + Fade</button>
            <Transition name="slide-fade">
              <p v-show="slow">Slide + Fade</p>
            </Transition>
          </div>

          <!-- Toggle Bouncy text -->
          <div>
            <button class="transition-btn text-center" @click="bounce = !bounce">Bounce Text</button>
            <Transition name="bounce">
              <p v-show="bounce">Here is some bouncy text</p>
            </Transition>
          </div>

          <!-- Toggle Animate CSS -->
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

          <!-- isActiveComponent -->
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
            <Transition name="fade" mode="out-in">
              <span :key="transitionCount">{{ transitionCount }}</span>
            </Transition>
          </div>

        </div>
      </div>

      <!-- Transition Group -->
      <div>
        <h2 class="text-center font-semibold text-2xl">Transition Group</h2>

        <div class="grid gap-4 flex-wrap mt-2">
          <div class="gap-8 flex items-center">
            <button class="transition-btn" @click="add">Add</button>
            <button class="transition-btn" @click="reset">Reset</button>
            <button class="transition-btn" @click="shuffle">Shuffle</button>
          </div>

          <div>
            <TransitionGroup tag="ul" name="group-fade" class="relative p-0 max-w-4/5 mx-auto">
              <ul class="flex justify-between items-center">
                <li v-for="item in items" class="flex items-center my-2 gap-4 w-full lg:w-4/5 mx-auto h-8 bg-black/40 shadow-2xl rounded-sm box-border" :key="item">
                  <span>{{ item }} &NonBreakingSpace;</span>
                  <span><button class="transition-btn" @click="remove(item)">x</button></span>
                </li>
              </ul>
            </TransitionGroup>
          </div>
        </div>

        <div class="grid gap-4 mt-2">
          <label for="query" class="flex items-center h-12 border-1 w-60 mt-2 rounded-md cursor-default focus:cursor-pointer py2 px-4">
            <input
              type="text" name="query" id="query" v-model="query"
              class="border-none my-2 outline-none"
            />
          </label>

          <TransitionGroup
            tag="ul" :css="false" name="list"
            @before-enter="onBeforeEnter"
            @enter="onEnter" @leave="onLeave"
          >
            <ul>
              <li
                v-for="(actor, index) in computedList"
                :key="actor.actorName" :data-index="index"
              >
                {{ actor.actorName }}
              </li>
            </ul>
          </TransitionGroup>
        </div>
      </div>

      <!-- KeepAlive -->
      <div>
        <div>
          <div class="flex items-center gap-8">
            <label for="alertBox">
              <input type="radio" name="alertBox" id="alertBox" v-model="keepActiveComponent" :value="AlertBox">
              AlertBox
            </label>

            <label for="mouseTracker">
              <input type="radio" name="errorComponent" id="errorComponent" v-model="keepActiveComponent" :value="ErrorComponent">
              Error Component
            </label>
          </div>

          <div>
            <div v-if="keepActiveComponent === AlertBox">The current component is: AlertBox</div>
            <div v-if="keepActiveComponent === ErrorComponent">The current component is: Error Component</div>
          </div>

          <!-- Transition Between Components -->
          <KeepAlive :max="10">
            <Transition name="fade" mode="out-in">
              <component :is="keepActiveComponent"></component>
            </Transition>
          </KeepAlive>
        </div>
      </div>

    </div>
  </div>
</template>



<style lang="css" scoped>
  /* Transition  */
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

  /* Transition Group */
  /* Group-Fade */
  /* 1. declare transition */
  .group-fade-move,
  .group-fade-enter-active,
  .group-fade-leave-active,
  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  /* 2. declare enter from and leave to state */
  .group-fade-enter-from,
  .group-fade-leave-to,
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
  }

  /* 3. ensure leaving items are taken out of layout flow so that moving
  animations can be calculated correctly. */

  .group-fade-leave-active {
    position: absolute;
  }
</style>
