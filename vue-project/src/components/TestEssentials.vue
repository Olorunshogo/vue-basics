
<script lang="ts" setup>
  import { ref, reactive, computed, defineProps, watch, useTemplateRef, onMounted } from 'vue';
  import { store } from '../stores/store';

  const color = ref<string>('green');

  const styleObject = ref({
    color: 'red',
    fontSize: '30px'
  })

  const publishedBooksMessage = computed(() => {
    return store.author.books.length > 0 ? 'Yes' : 'No';
  });
  const firstName = ref<string>('John');
  const lastName = ref<string>('Author');
  const fullName = computed({
    get() {
      return firstName.value + ' ' + lastName.value;
    },
    set(newValue) {
      [firstName.value, lastName.value] = newValue.split(' ');
    }
  })

  // Conditional and List Rendering
    const vIf = ref<boolean>(true);
    const toggleVif = ref<boolean>(true);
    const vShow = ref<boolean>(true);
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
    const newTodo = ref<string>('');
    const hideCompleted = ref<boolean>(false)
    const todos = ref([
    { id: id++, text: 'Learn HTML', done: true },
    { id: id++, text: 'Learn JavaScript', done: true },
    { id: id++, text: 'Learn Vue', done: false }
  ])
  //   let newTodoId = 4;
  //   function addTodo() {
  //     todos.value.push({
  //       id: id++,
  //       text: newTodo.value,
  //       done: false
  //     })
  //     newTodo.value = '';
  //   }
  //   function removeTodo(todo: string) {
  //     todos.value = todos.value.filter((t) => t !== todo)
  //   }
  //   function shout(warning: string) {
  //     alert(warning)
  //   }


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

//   // Template Refs
//   const templateInput = useTemplateRef('text-input');
//   onMounted(() => {
//     templateInput.value.focus();
//   })

  // Component Basics
  // const posts = ref([
  //   { id: 1, title: 'My journey with Vue' },
  //   { id: 2, title: 'Blogging with Vue' },
  //   { id: 3, title: 'Why Vue is so fun' }
  // ])
  // const postFontSize = ref(1);

  // Lifecycle Hooks
  onMounted(() => {
    // alert('This component is now mounted and there should be an alert.');
    console.log(`the component is now mounted.`);
  });

  const emit = defineEmits({
    click: null,

    submit: ({ email, password }) => {
      if (email && password) {
        return true;
      } else {
        console.warn('invalid submit event payload')
        return true;
      }
    }
  });

  function submitForm(email: string, password: string) {
    emit('submit', { email, password })
  }

</script>

<template>
  <div>
    <h1>Essentials Test</h1>

    <!-- Template Syntax -->
    <div>
      <h2>Template Syntax</h2>
      <p>
        <span :title="store.title">Hover over this paragraph to see the dynamically bound title!</span>
      </p>

      <p :class="{ red: store.isRed }" @click="store.isRed = false">
        This should be red...but click to toggle the color.
      </p>

      <p v-if="store.isRed" :class="{ color }" @click="store.isRed = false">
        This should be green, and should toggle between red and blue on click.
        <a :href="store.googleLink" target="_blank">Google</a>
      </p>
      <p :class="{ active: store.isActive }" @click="store.isActive = false">Active or not - Click to toggle color</p>
      <!-- <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">Active Color and Font Size</p> -->
      <p :style="styleObject">Active Color and Font Size</p>

      <button :disabled="store.isButtonDisabled" @click="store.isButtonDisabled = !store.isButtonDisabled">Button</button>
      <!-- <form action="" @submit.prevent="onSubmit"></form> -->
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
    <!-- <div>
      <h2>Conditional and List Rendering</h2>
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
      </div>
    </div> -->

    <!-- Form Handling -->
    <div>
      <h2>Form Handling</h2>
      <div>
        <p>Text message is: {{ store.textInput }}</p>
        <label for="text">
          <input v-model="store.textInput" ref="text-input" type="text" name="text" id="text" >
        </label>
      </div>

      <div>
        <p>Textarea message is: <span style="white-space: pre-line;">{{ store.textareaInput }}</span></p>
        <label for="textarea">
          <textarea v-model="store.textareaInput" name="textarea" id="textarea" cols="30" rows="3" placeholder="add multiple lines"></textarea>
        </label>
      </div>

      <div>
        <p>Checked names: {{ store.checkedNames }}</p>
        <label for="jack">
          <input v-model="store.checkedNames" value="Jack" type="checkbox" name="jack" id="jack"> &NonBreakingSpace;
          Jack
        </label>
        <label for="john">
          <input v-model="store.checkedNames" value="John" type="checkbox" name="john" id="john"> &NonBreakingSpace;
          John
        </label>
        <label for="mike">
          <input v-model="store.checkedNames" value="Mike" type="checkbox" name="mike" id="mike"> &NonBreakingSpace;
          Mike
        </label>
      </div>

      <div>
        <p>Picked: {{ store.radioPicked }}</p>
        <label for="one">
          <input v-model="store.radioPicked" value="One" type="radio" name="one" id="one"> &NonBreakingSpace;
          One
        </label>
        <label for="two">
          <input v-model="store.radioPicked" value="Two" type="radio" name="two" id="two"> &NonBreakingSpace;
          Two
        </label>
      </div>

      <div>
        <p>Selected: {{ store.selectedInput }}</p>
        <label for="select">
          <select v-model="store.selectedInput" name="select" id="select">
            <option value="" disabled>Please select one</option>
            <option v-for="option in store.options" :key="option.value" :value="store.options.values">
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
    <div>
      <h2>Component Basics</h2>
      <div>
        <h3>Here are many child components!</h3>
        <ButtonCounter :counterArg="2"/>
        <ButtonCounter :counterArg="4"/>
        <ButtonCounter :counterArg="6"/>
      </div>

      <!-- <div>
        <h3>Titles to the BlogPosts</h3>
        <div :style="{ fontSize: store.postFontSize + 'em' }">
          <BlogPost
            v-for="post in store.posts" :key="post.id"
            :title="post.title" @enlarge-text="store.postFontSize += 0.1"
          />
        </div>
      </div> -->

      <div>
        <AlertBox>
          Something bad happened
        </AlertBox>
      </div>
    </div>

    <!-- Lifecycle Hooks -->
    <div>
      <h2>Lifecycle Hooks</h2>
      <ul>
        <li>beforeCreate</li>
        <li>created</li>
        <li>beforeMount</li>
        <li>mounted</li>
        <li>
          Mounted: loop of beforeUpdate and Update (when data changes)
        </li>
        <li>When component is unmounted: beforeUnmount </li>
        <li>unmounted</li>
      </ul>
    </div>

  </div>
</template>



<style lang="css" scoped>
  h1 {
    text-align: center;
    font-weight: 700;
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }

  h2 {
    text-align: center;
    font-weight: 600;
    margin: 1rem 0;
    font-size: 1.1rem;
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

  input,
  textarea {
    border: none;
    outline: none;
  }

</style>
