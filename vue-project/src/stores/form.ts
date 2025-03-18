

import { reactive } from "vue";

interface FormInput {
  // Animation techniques
  fullName: String,
}

export const form = reactive<FormInput>({
  fullName: ''

})
