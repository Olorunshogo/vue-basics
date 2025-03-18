
<script lang="ts" setup>
  import type { PropType } from 'vue';
  // import { form } from '../stores/form'

  import { ref } from 'vue';

  interface FormItem {
    id: string;
    label: string;
    type: string;
    name: string;
    value: string | number;
    placeholder: string;
  }

  const props = defineProps({
    action: { type: String, required: true },
    method: { type: String, required: true },
    autocomplete: { type: String, required: true },
    for: { type: String, required: true },
    formItems: Array as PropType<FormItem[]>,
    style: { type: String, required: false },
  });


  // function submitForm() {
  //   alert('Submit button is working')
  // };


</script>

<template>
  <div>
    <form
      :action="props.action" :method="props.method"
      class="relative flex flex-col gap-4"
    >
      <div
        v-for="item in props.formItems" :key="item.id"
        class="flex gap-2 items-center"
      >
        <label :for="item.id"
          class="text-lg font-bold"
        >
          {{ item.label }}
        </label>
        <input
          :type="item.type" :id="item.id" :placeholder="item.placeholder"
          :name="item.name" v-model="item.value"
          class="border-1 rounded-lg shadow-lg px-4 py-2 text-sm"
        />
      </div>

      <button type="submit"
        class="px-4 py-2 my-2 font-semibold border-2 rounded-lg shadow-lg text-md"
      >
        <slot name="submitButton">
          Default Submit button Slot
        </slot>
      </button>
    </form>

    <p
      v-for="item in props.formItems" :key="item.id"
      class="text-sky-600"
    >
      {{ item.value }}
    </p>

  </div>
</template>

