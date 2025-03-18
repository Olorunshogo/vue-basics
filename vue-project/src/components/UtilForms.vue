
<script lang="ts" setup>
  import { useMouse, useInterval, useEventSource } from '@vueuse/core';
  import { othertopics } from '../stores/othertopics';
  import { watchEffect, ref } from 'vue';

  const { x, y } = useMouse();
  watchEffect(() => {
    othertopics.x = x.value;
    othertopics.y = y.value;
  });
  const counter = useInterval(3000);

  const formItems = [
    { id: 'name', label: 'Name: ', type: 'text', name: 'name', value: '', placeholder: 'Enter your name' },
    { id: 'age', label: 'Age: ', type: 'number', name: 'age', value: 0, placeholder: 'Enter your age' },
  ];

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

            <!-- useInterval() -->
            <div>
              <p>Interval fired: {{ counter }}</p>
            </div>
          </div>
        </div>

        <h2 class="my-2 text-xl font-semibold text-center">Vuelidate Forms</h2>

        <div class="flex flex-wrap items-center gap-4">
          <CustomForm
            :action="'../Form/action.php'" :method="'POST'" :autocomplete="'on'"
            :formItems="formItems"
          >

            <template #submitButton>
              Submit Button
            </template>
          </CustomForm>
        </div>


      </div>
  </div>
</template>
