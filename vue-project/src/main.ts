import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ButtonCounter from './components/ButtonCounter.vue'
import AlertBox from './components/AlertBox.vue'
import BlogPost from './components/BlogPost.vue'
import TodoItem from './components/TodoItem.vue'
import TestEssentials from './components/TestEssentials.vue'
import ComponentsDepth from './components/ComponentsDepth.vue'

const app = createApp(App)

app
  .component('ButtonCounter', ButtonCounter)
  .component('BlogPost', BlogPost)
  .component('AlertBox', AlertBox)
  .component('TodoItem',TodoItem)

  .component('TestEssentials', TestEssentials)
  .component('ComponentsDepth', ComponentsDepth)

app.use(createPinia())
app.use(router)

app.mount('#app')
