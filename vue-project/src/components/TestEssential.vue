
<script lang="ts" setup>
  import { ref, reactive, computed, defineProps, watch, useTemplateRef, onMounted } from 'vue';
  // import TodoItem from './TodoItem.vue';

  // Template Syntax, Class & Style Bindings
  // const title = ref<string>('Attribute Binding');
  // const isRed = ref<boolean>(true);
  // const color = ref<string>('green');
  // const isButtonDisabled = ref<boolean>(false);
  // const googleLink = ref<string>('https://google.com/');
  // function toggleRed() {
  //   isRed.value = !isRed.value;
  // }
  // function toggleColor() {
  //   color.value = color.value === 'green' ? 'blue' : 'red';
  // }
  // const isActive = ref(true);
  // function toggleActive() {
  //   isActive.value = !isActive.value
  // }
  // // const activeColor = ref('red');
  // // const fontSize = ref(20);
  // const styleObject = ref({
  //   color: 'red',
  //   fontSize: '30px'
  // })


  // Computed Properties
  // const author = reactive({
  //   name: 'John Author',
  //   books: [
  //     'Vue 2 - Advanced Guide',
  //     'Vue 3 - Basic Guide',
  //     'Vue 4 - The Mystery'
  //   ]
  // });
  // const publishedBooksMessage = computed(() => {
  //   return author.books.length > 0 ? 'Yes' : 'No';
  // });
  // const firstName = ref('John');
  // const lastName = ref('Author');
  // const fullName = computed({
  //   get() {
  //     return firstName.value + ' ' + lastName.value;
  //   },
  //   set(newValue) {
  //     [firstName.value, lastName.value] = newValue.split(' ');
  //   }
  // })

  // Conditional and List Rendering
//   const vIf = ref(true);
//   const toggleVif = ref(true);
//   const vShow = ref(true);
//   const parentMessage = ref('Parent');
//   const items = ref([
//     { message: 'Item 1' },
//     { message: 'Item 2' }
//   ]);
//   const myObject = reactive({
//     title: 'How to do lists in Vue',
//     author: 'Jane Doe',
//     publishedAt: '2016-04-10'
//   })
//   let id = 0;
//   const newTodo = ref('');
//   const hideCompleted = ref(false)
//   const todos = ref([
//   { id: id++, text: 'Learn HTML', done: true },
//   { id: id++, text: 'Learn JavaScript', done: true },
//   { id: id++, text: 'Learn Vue', done: false }
// ])
//   let newTodoId = 4;
//   function addTodo() {
//     todos.value.push({
//       id: id++,
//       text: newTodo.value,
//       done: false
//     })
//     newTodo.value = '';
//   }
//   function removeTodo(todo) {
//     todos.value = todos.value.filter((t) => t !== todo)
//   }
//   function shout(warning: string) {
//     alert(warning)
//   }

  // Form Handling
  const textInput = ref('');
  const textareaInput = ref('');
  const checkedNames = ref([]);
  const radioPicked = ref([]);
  const selectedInput = ref([]);
  const options = ref([
    { value: "A" }, { value: "B" },
    { value: "C" }, { value: "D" },
  ]);

  // Watchers
  const questionWatchers = ref('');
  const answerWatchers = ref('Questions usually contain a question mark. ;-)');
  const loadingWatchers = ref(false);
  watch(questionWatchers, async (newQuestion, oldQuestion) => {
    if (newQuestion.includes('?')) {
      loadingWatchers.value = true;
      answerWatchers.value = 'Thinking...';
      try {
        const res = await fetch('https://yesno.wtf/api');
        answerWatchers.value = (await res.json()).answer;
      } catch (error) {
        answerWatchers.value = 'Error! Could not reach the API. ' + error;
      } finally {
        loadingWatchers.value = false;
      }
    }
  },
  { once: true }
);

// Template Refs
const templateInput = useTemplateRef('text-input');
onMounted(() => {
  templateInput.value.focus();
})


</script>

<template>
  <div>
    <h2>Essential Test</h2>

    <!-- Template Syntax -->
    <div>
      <!-- <h3>Template Syntax</h3>
      <p>
        <span :title="title">Hover over this paragraph to see the dynamically bound title!</span>
      </p>

      <p :class="{ red: isRed }" @click="toggleRed">
        This should be red...but click to toggle the color.
      </p>

      <p v-if="isRed" :class="{ color }" @click="toggleColor">
        This should be green, and should toggle between red and blue on click.
        <a :href="googleLink" target="_blank">Google</a>
      </p> -->
      <!-- <p :class="{ active: isActive }" @click="toggleActive">Active or not - Click to toggle color</p> -->
      <!-- <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">Active Color and Font Size</p> -->
      <!-- <p :style="styleObject">Active Color and Font Size</p>

      <button :disabled="isButtonDisabled" @click="isButtonDisabled = !isButtonDisabled">Button</button>
      <form action="" @submit.prevent="onSubmit"></form> -->
    </div>

    <!-- Computed Property -->
    <!-- <div>
      <h2>Computed Property</h2>
      <p>Has author published books:
        <span>{{ publishedBooksMessage }}</span>
      </p>
      <p>Full name of the author is: {{ fullName }}</p>

    </div> -->

    <!-- Conditional and List Rendering -->
    <div>
      <!-- <h3>Conditional and List Rendering</h3>
      <p>
        <span v-if="vIf">Vue is awesome!. V-if is true</span>
        <span v-else>Oh no 😢, v-if is false</span> &NonBreakingSpace;
        <button @click="vIf = !vIf"> Toggle V-if</button>
      </p>
      <ul>
        <li v-for="value in items" :key="value">
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
      </div> -->
    </div>

    <!-- Form Handling -->
    <div>
      <h2>Form Handling</h2>
      <div>
        <p>Text message is: {{ textInput }}</p>
        <label for="text">
          <input v-model="textInput" ref="text-input" type="text" name="text" id="text" >
        </label>
      </div>

      <div>
        <p>Textarea message is: <span style="white-space: pre-line;">{{ textareaInput }}</span></p>
        <label for="textarea">
          <textarea v-model="textareaInput" name="textarea" id="textarea" cols="30" rows="3" placeholder="add multiple lines"></textarea>
        </label>
      </div>

      <div>
        <p>Checked names: {{ checkedNames }}</p>
        <label for="jack">
          <input v-model="checkedNames" value="Jack" type="checkbox" name="jack" id="jack"> &NonBreakingSpace;
          Jack
        </label>
        <label for="john">
          <input v-model="checkedNames" value="John" type="checkbox" name="john" id="john"> &NonBreakingSpace;
          John
        </label>
        <label for="mike">
          <input v-model="checkedNames" value="Mike" type="checkbox" name="mike" id="mike"> &NonBreakingSpace;
          Mike
        </label>
      </div>

      <div>
        <p>Picked: {{ radioPicked }}</p>
        <label for="one">
          <input v-model="radioPicked" value="One" type="radio" name="one" id="one"> &NonBreakingSpace;
          One
        </label>
        <label for="two">
          <input v-model="radioPicked" value="Two" type="radio" name="two" id="two"> &NonBreakingSpace;
          Two
        </label>
      </div>

      <div>
        <p>Selected: {{ selectedInput }}</p>

        <label for="select">
          <select v-model="selectedInput" name="select" id="select">
            <!-- <option value="" disabled>Please select one</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option> -->

            <option value="" disabled>Please select one</option>
            <option v-for="option in options" :key="option.value" :value="options.value">
              {{ option.value }}
            </option>
          </select>
        </label>
      </div>
    </div>

    <!-- Watchers -->
    <div>
      <h2>Watchers</h2>
      <p>
        Ask a yes/no question
        <label for="question">
          <input v-model="questionWatchers" type="text" name="question" id="question">
        </label>
      </p>
      {{ answerWatchers }}
    </div>

    <!-- ComponentBaics -->

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

 label {
  border: 1px solid grey;
  display: inline-flex;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
 }

</style>
