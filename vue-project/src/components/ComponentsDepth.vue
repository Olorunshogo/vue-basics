
<script lang="ts" setup>
import { ref } from 'vue';
  // Props Declaration
  const props = defineProps<{
    title?: String,
    likes?: Number,
    foo?: String,
    greetingMessage?: String,
  }>();
  console.log(props.title);

  interface Posts {
    id: number;
    title: string;
    likes?: number;
    author: Author;
    buttontext: string;
  }

  interface Author {
    name: string;
    company: string;
  }

  const posts = ref<Posts[]>([
    {
      id: 1,
      title: 'First BlogPost title',
      likes: 22,
      author: { name: 'Veronica', company: 'Veridian Dynamics' },
      buttontext: 'Alert 1',
    },
    {
      id: 2,
      title: 'Second BlogPost title',
      likes: 38,
      author: { name: 'John', company: 'Tech Corp' },
      buttontext: 'Alert 2'
     }
  ]);

  function alertmsg() {
    alert('This button is working');
  }

  // Component v-model
  const modelMsg = ref<string>('modelValue');
  const compT = ref<string>('compTitle');

  const modelMsgs = ref<string>('model2');
  const compTitles = ref<string>('compTitle2');



</script>

<template>
  <div>
    <div>
      <h1>Components In-Depth</h1>

      <!-- Props and Event -->
      <div>
        <h2>Props Declaration and Component Events</h2>
        <p>Greeting message is: {{ greetingMessage }}</p>
        <div v-for="post in posts" :key="post.id">
          <BlogPost class="component comp1"
            :title="post.title" :likes="post.likes"
            :author="post.author" :buttontext="post.buttontext"
            @alert-text="alertmsg"
          />
        </div>
      </div>

      <!-- Component v-model -->
      <div>
        <h2>Component v-model</h2>
        <p>Model message is: {{ modelMsg }}</p>
        <p>My Component Title is: {{ compT }}</p>
        <MyComponent class="component comp2"
          v-model:model-message="modelMsg"
          v-model:comp-title="compT"
        />
        <p>Model message is: {{ modelMsgs }}</p>
        <p>My Component Title is: {{ compTitles }}</p>
        <MyComponent class="component comp2"
          v-model:model-message="modelMsgs"
          v-model:comp-title="compTitles"
        />
      </div>
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

  .component {
    padding: 0.5rem 1rem 0.5rem 0;
    margin: 0.5rem 0;
  }

  .comp2 {
    padding: 0.5rem 1rem 0.5rem 0;
    display: flex;
    flex-direction: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
