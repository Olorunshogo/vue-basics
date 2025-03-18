

<script lang="ts" setup>

  import { ref, onMounted } from 'vue';
  const jokes = ref<string>('');
  const datta = ref<string>('');
  const fact = ref<string>('');

  // Function to fetch jokes
  // async function fetchJokes() {
  //   try {
  //     const response = await fetch('https://jokes-api-by-api-ninja.p.rapidapi.com/v1/jokes');
  //     jokes.value = await response.json();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function fetchJokes() {
    try {
      let url = 'https://dad-jokes.p.rapidapi.com/joke/ai/cow'
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
          'x-rapidapi-key': '278eb7d5c5msh69999cf3a7ed124p1f97cfjsnd3d9ee4d5275'

        }
      });

      if (response.ok) {
        let json = await response.json();
      } else {
        throw new Error('Network was not ok');
      }

      let data = await response.json();

      //Ensure that the API returned data and access the correct property
      if (data && data.body && Array.isArray(data.body) && data.body.length > 0) {
        jokes.value = data.body[0].joke;
      } else {
        jokes.value = 'No facts found'
      }
    } catch (error) {
      // console.error('Error fetching jokes: ', error);
      // alert('Error fetching jokes: ' + error);
      alert('Error fetching jokes: ' + error);
    }
  };

  // function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', {
        method: "GET",
        headers: {
          'x-rapidapi-host': 'facts-by-api-ninjas.p.rapidapi.com',
          'x-rapidapi-key': '278eb7d5c5msh69999cf3a7ed124p1f97cfjsnd3d9ee4d5275'
        }
      });

      if (!response.ok) {
        throw new Error('Network was not ok');
      }

      const data = await response.json();

      //Ensure that the API returned data and access the correct property
      if (data && data.length > 0) {
        datta.value = data[0].datta;
      } else {
        datta.value = 'No facts found'
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
      alert('Error fetching data: ' + error);
    }
  };

  // Function to fetch fact
  const fetchFact = async () => {
    try {
      const response = await fetch ('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'facts-by-api-ninjas.p.rapidapi.com',
          'x-rapidapi-key': '278eb7d5c5msh69999cf3a7ed124p1f97cfjsnd3d9ee4d5275',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      fact.value = data[0].fact;

    } catch (error) {
      console.log('Error fetching fact: ', error);
      alert('Error fetching fact: ' + error);
    }

  }

  onMounted(() => {
    setTimeout(() => {
      fetchJokes();
      // fetchData();
      // fetchFact();
    }, 1500)
  });

  


</script>

<template>
  <div>
    <h1 class="my-4 text-2xl font-bold text-center text-white">API Calls</h1>

    <!-- API Calls -->
    <div>
      <h3 class="my-2 text-xl font-semibold text-center">Random Api Calls</h3>


      <div class="relative flex flex-wrap items-center gap-12">
        <div class="hello">
          <h3 class="my-2 text-lg font-semibold">Random Dad Jokes</h3>
          <p v-if="jokes">{{ jokes }}</p>
          <button class="p-4 rounded-lg text-md border-1" @click="fetchJokes">Click Me</button>
        </div>

        <div class="hello">
          <h3 class="my-2 text-lg font-semibold">Random Datta</h3>
          <p v-if="datta">{{ datta }}</p>
          <button class="p-4 rounded-lg text-md border-1" @click="fetchData">Click Me</button>
        </div>

        <div class="fact">
          <h3 class="my-2 text-lg font-semibold">Random Facts</h3>
          <p v-if="fact">{{ fact }}</p>
          <button class="p-4 rounded-lg text-md border-1" @click="fetchFact">Click Me</button>
        </div>




      </div>





    </div>
  </div>
</template>

<style lang="css" scoped>
  .formkit {
    border: 1px solid red;
    width: 400px;
    height: 50px;
    border-radius:0.5rem;
  }
</style>

