
import { reactive } from "vue";

interface ExtraTopics {
  // Animation techniques
  number: number;
  tweened: number;
}

export const extops = reactive<ExtraTopics>({
  number: 0,
  tweened: 0,

})
