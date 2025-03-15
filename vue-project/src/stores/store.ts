
import { reactive } from "vue";

interface StoreState {
  // Template Syntax, Class & Style Bindings
  title: string;
  isRed: boolean;
  color: string;
  isButtonDisabled: boolean;
  googleLink: string;
  isActive: boolean;
  styleObject: {
    color: string;
    fontSize: string;
  }

  // Computed Property
  author: {
    name: string;
    books: string[];
  };
  firstName: string;
  lastName: string;

  // Form Handling
  textInput: string;
  textareaInput: string;
  checkedNames: string[];
  radioPicked: string[];
  selectedInput: string[];
  options: { value: string }[];

  questionWatchers: string;
  answerWatchers: string;
  loadingWatchers: boolean;

  posts: [
    { id: number, title: string },
    { id: number, title: string },
    { id: number, title: string }
  ]
  postFontSize: number;
}

export const store = reactive<StoreState>({
  title: 'Attribute Binding',
  isRed: true,
  color: 'green',
  isButtonDisabled: false,
  googleLink: 'https://google.com/',
  isActive: true,
  styleObject: {
    color: 'red',
    fontSize: '30px',
  },

  textInput: '',
  textareaInput: '',

  // Computed Property
  author: {
    name: 'John Author',
    books: [
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
  },

  firstName: 'John',
  lastName: 'Author',
  checkedNames: [],
  radioPicked: [],
  selectedInput: [],
  options: [
    { value: "A"}, { value: "B" },
    { value: "C"}, { value: "D" },
  ],

  questionWatchers: '',
  answerWatchers: 'Questions usually contain a question mark. ;-',
  loadingWatchers: false,

  // Component Basics
  posts: [
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }
  ],
  postFontSize: 1


})
