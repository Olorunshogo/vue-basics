
import { reactive } from "vue";

interface OtherTopics {
  // Animation techniques
  x: number;
  y: number;
  greetings: string[];
}

export const othertopics = reactive<OtherTopics>({
  x: 0,
  y: 0,
  greetings: ['Hello', 'Hi', 'Yo!', 'Hey', 'Hola', 'こんにちは', 'Bonjour', 'Salut!', '你好', 'Привет']

})
