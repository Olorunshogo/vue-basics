
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
      author: { name: 'Veronica', company: 'Veridian Dynamics' }
    },
    {
      id: 2,
      title: 'Second BlogPost title',
      likes: 38,
      author: { name: 'John', company: 'Tech Corp' }
     }
  ]);
</script>

<template>
  <div>
    <div>
      <h1>Components In-Depth</h1>

      <!-- Props Declaration -->
      <div>
        <h2>Props Declaration</h2>
        <p>Greeting message is: {{ greetingMessage }}</p>
        <div v-for="post in posts" :key="post.id">
          <BlogPost
            :title="post.title" :likes="post.likes"
            :author="post.author"
          />
        </div>
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
