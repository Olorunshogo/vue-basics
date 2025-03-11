
<script lang="ts" setup>
  import { ref, reactive, computed, defineProps } from 'vue';
  // import TodoItem from './TodoItem.vue';

  // Template Syntax, Class & Style Bindings
  const title = ref<string>('Attribute Binding');
  const isRed = ref<boolean>(true);
  const color = ref<string>('green');
  const isButtonDisabled = ref<boolean>(false);
  const googleLink = ref<string>('https://google.com/');
  function toggleRed() {
    isRed.value = !isRed.value;
  }
  function toggleColor() {
    color.value = color.value === 'green' ? 'blue' : 'red';
  }
  const isActive = ref(true);
  function toggleActive() {
    isActive.value = !isActive.value
  }
  // const activeColor = ref('red');
  // const fontSize = ref(20);
  const styleObject = ref({
    color: 'red',
    fontSize: '30px'
  })


  // Computed Properties
  const author = reactive({
    name: 'John Author',
    books: [
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
  });
  const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No';
  });
  const firstName = ref('John');
  const lastName = ref('Author');
  const fullName = computed({
    get() {
      return firstName.value + ' ' + lastName.value;
    },
    set(newValue) {
      [firstName.value, lastName.value] = newValue.split(' ');
    }
  })

  // Conditional and List Rendering
  const vIf = ref(true);
  const toggleVif = ref(true);
  const vShow = ref(true);
  const parentMessage = ref('Parent');
  const items = ref([
    { message: 'Item 1' },
    { message: 'Item 2' }
  ]);
  const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
  })

  let id = 0;
  const newTodo = ref('');
  const hideCompleted = ref(false)
  const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])
  let newTodoId = 4;
  function addTodo() {
    todos.value.push({
      id: id++,
      text: newTodo.value,
      done: false
    })
    newTodo.value = '';
  }

  function removeTodo(todo) {
    todos.value = todos.value.filter((t) => t !== todo)
  }
  function shout(warning: string) {
    alert(warning)
  }



</script>

<template>
  <div>
    <h2>Essential Test</h2>

    <!-- Template Syntax -->
    <div>
      <h3>Template Syntax</h3>
      <p>
        <span :title="title">Hover over this paragraph to see the dynamically bound title!</span>
      </p>

      <p :class="{ red: isRed }" @click="toggleRed">
        This should be red...but click to toggle the color.
      </p>

      <p v-if="isRed" :class="{ color }" @click="toggleColor">
        This should be green, and should toggle between red and blue on click.
        <a :href="googleLink" target="_blank">Google</a>
      </p>
      <p :class="{ active: isActive }" @click="toggleActive">Active or not - Click to toggle color</p>
      <!-- <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">Active Color and Font Size</p> -->
      <p :style="styleObject">Active Color and Font Size</p>

      <button :disabled="isButtonDisabled" @click="isButtonDisabled = !isButtonDisabled">Button</button>
      <form action="" @submit.prevent="onSubmit"></form>
    </div>

    <!-- Computed Property -->
    <div>
      <h2>Computed Property</h2>
      <p>Has author published books:
        <span>{{ publishedBooksMessage }}</span>
      </p>
      <p>Full name of the author is: {{ fullName }}</p>

    </div>

    <!-- Conditional and List Rendering -->
     <div>
      <h3>Conditional and List Rendering</h3>
      <p>
        <span v-if="vIf">Vue is awesome!. V-if is true</span>
        <span v-else>Oh no 😢, v-if is false</span> &NonBreakingSpace;
        <button @click="vIf = !vIf"> Toggle V-if</button>
      </p>
      <ul>
        <li v-for="value in items" :key="value">
          <!-- <li v-for="{item, index} in items" :key="item"> -->
          <!-- {{ parentMessage }} - {{ index }} - {{ items.message }} -->
            {{ value.message }}
        </li>
      </ul>
      <ul>
        <li v-for="{ message } in items" :key="message">
          {{ message }}
        </li>
      </ul>
      <ul>
        <li v-for="(value, key, index) in myObject" :key="index">
          {{ index + 1 }}. {{ key }}:  {{ value }}
          <span v-for="n in 10" :key="n">{{ n }}</span>
        </li>
      </ul>
      <div>
        <form @submit.prevent="addTodo">
          <input v-model="newTodo" required placeholder="new todo">
          <button>Add Todo</button>
        </form>

        <ul>
          <li v-for="todo in todos" :key="todo.id">
            <input type="checkbox" v-model="todo.done"> &NonBreakingSpace;
            <span :class="{ done: todo.done }">{{ todo.text }}</span> &NonBreakingSpace;
            <button @click="removeTodo(todo)">X</button>
          </li>
        </ul>

        <button @click="hideCompleted = !hideCompleted">
          {{ hideCompleted ? 'Show all' : 'Hide completed' }}
        </button>
        &NonBreakingSpace;
        <button @click="shout('Done!!')">Alert done</button>
      </div>

     </div>
  </div>
</template>



<style scoped>
 h2 {
  text-align: center;
  font-weight: 600;
  margin-top: 1.5rem;
  font-size: 1.2rem;
 }

 /* Template Syntax */
 .red {
  color: red;
 }

 .active {
  color: green;
 }

 .done {
  text-decoration: line-through;
 }

</style>
