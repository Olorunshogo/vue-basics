
<script lang="ts" setup>
  // import { FormKit } from '@formkit/vue';

  const formItems = [
    { id: 'name', label: 'Name: ', type: 'text', name: 'name', value: '', placeholder: 'Enter your name' },
    { id: 'age', label: 'Age: ', type: 'number', name: 'age', value: 0, placeholder: 'Enter your age' },
    { id: 'password', label: 'Password: ', type: 'password', value: '', placeholder: 'Password' },
  ];

  const secondForm = [
    { id: 'name', label: 'Full Name: ', type: 'text', name: 'name', value: '', placeholder: 'Enter your full  name' },
    { id: 'age', label: 'Age: ', type: 'number', name: 'age', value: 0, placeholder: 'Enter your age' },
    { id: 'password', label: 'Password: ', type: 'password', value: '', placeholder: 'Password' },
  ];

</script>

<template>
  <div>
    <h1 class="my-4 text-2xl font-bold text-center text-white">Other Topics</h1>

      <!-- Forms -->
      <div>
        <h2 class="my-2 text-xl font-semibold text-center">Forms</h2>

        <h2 class="my-2 text-xl font-semibold text-center text-white">FormKit</h2>

        <div>
          <FormKit
            type="text" name="name" id="name"
            label="Name" help="Your full name" placeholder="Jon Doe"
            class="formkit"
          ></FormKit>

          <FormKit type="select"></FormKit>

          <FormKit
            type="range" name="strength" id="strength" label="Strength"
            value="5" min="1" max="10" step="1" class="formkit"
            help="How many strength points should this character have"
            validation-visibility="live" validation="min:2|max:9"
          >
          </FormKit>

          <!-- <form class="group/form formkit-form" id="input_0" name="form_1">
            <div class="group max-w-[20em] min-w-0 grow mb-4 data-[disabled]:select-none data-[disabled]:opacity-50 text-base formkit-outer" data-family="text" data-type="range">
              <div class="flex flex-col items-start justify-start mb-1.5 last:mb-0 formkit-wrapper">
                <label class="block text-neutral-700 text-sm font-bold dark:text-neutral-300 !inline-flex mb-1 formkit-label" for="strength">Strength</label>
                <div class="text-base flex items-center w-full py-2 px-3 rounded border border-neutral-400 bg-white focus-within:ring-1 focus-within:!ring-blue-500 focus-within:!border-blue-500 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-neutral-100 group-data-[disabled]:!cursor-not-allowed shadow group-[]/repeater:shadow-none group-[]/multistep:shadow-none dark:bg-transparent dark:border-neutral-500 dark:group-data-[disabled]:bg-neutral-800/5 dark:group-data-[invalid]:border-red-500 dark:group-data-[invalid]:ring-red-500 relative !border-none !ring-0 !px-0 !bg-transparent !shadow-none formkit-inner">
                  <input min="1" max="10" step="1" class="appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-neutral-700 group-data-[has-overlay]:selection:!text-transparent text-base text-neutral-700 min-w-0 min-h-[1.5em] grow outline-none bg-transparent selection:bg-blue-100 placeholder:text-neutral-400 group-data-[disabled]:!cursor-not-allowed dark:placeholder-neutral-400/50 dark:text-neutral-300 border-none p-0 focus:ring-0 group/input cursor-pointer [&amp;::-webkit-slider-runnable-track]:bg-neutral-400/50 [&amp;::-webkit-slider-runnable-track]:h-[0.25em] [&amp;::-webkit-slider-runnable-track]:rounded dark:[&amp;::-webkit-slider-runnable-track]:bg-neutral-500/50 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-[0.85em] [&amp;::-webkit-slider-thumb]:aspect-[1/1] [&amp;::-webkit-slider-thumb]:bg-blue-600 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:relative [&amp;::-webkit-slider-thumb]:top-1/2 [&amp;::-webkit-slider-thumb]:-translate-y-1/2 [&amp;::-webkit-slider-thumb]:group-data-[disabled]:bg-neutral-500 [&amp;::-webkit-slider-thumb]:group-data-[disabled]:!ring-neutral-300 [&amp;::-webkit-slider-thumb]:focus-visible:ring-2 [&amp;::-webkit-slider-thumb]:focus:!ring-blue-500 [&amp;::-webkit-slider-thumb]:focus:ring-offset-2 [&amp;::-webkit-slider-thumb]:shadow dark:[&amp;::-webkit-slider-thumb]:group-data-[disabled]:!ring-neutral-600 dark:[&amp;::-webkit-slider-thumb]:focus:ring-offset-neutral-700 [&amp;::-moz-range-track]:bg-neutral-400/50 [&amp;::-moz-range-track]:h-[0.25] [&amp;::-moz-range-track]:rounded dark:[&amp;::-moz-range-track]:bg-neutral-500/50 [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:border-none [&amp;::-moz-range-thumb]:w-[0.85em] [&amp;::-moz-range-thumb]:h-[0.85em] [&amp;::-moz-range-thumb]:bg-blue-600 [&amp;::-moz-range-thumb]:rounded-full [&amp;::-moz-range-thumb]:group-data-[disabled]:bg-neutral-500 [&amp;::-moz-range-thumb]:group-data-[disabled]:!ring-neutral-300 [&amp;::-moz-range-thumb]:focus-visible:ring-2 [&amp;::-moz-range-thumb]:focus:!ring-blue-500 [&amp;::-moz-range-thumb]:focus:ring-offset-2 [&amp;::-moz-range-thumb]:shadow dark:[&amp;::-moz-range-thumb]:group-data-[disabled]:!ring-neutral-500 dark:[&amp;::-moz-range-thumb]:focus:ring-offset-neutral-700 formkit-input" type="range" name="strength" id="strength" aria-describedby="help-strength" value="5">
                </div>
              </div>
              <div class="text-xs text-neutral-500 dark:text-neutral-400 formkit-help" id="help-strength">How many strength points should this character have?</div>
            </div>
            <p>
              <em>
                <small class="mb-4">Remember: You have a budget of 20 points to build your character.</small>
              </em>
            </p>
            <pre wrap="">5</pre>
          </form> -->
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

