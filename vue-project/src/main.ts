
import { createApp, defineAsyncComponent, onMounted } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ButtonCounter from './components/ButtonCounter.vue'
import AlertBox from './components/AlertBox.vue'
import BlogPost from './components/BlogPost.vue'
import TodoItem from './components/TodoItem.vue'
import TestEssentials from './components/TestEssentials.vue'
import ComponentsDepth from './components/ComponentsDepth.vue'
import MyComponent from './components/MyComponent.vue'
import FancyButton from './components/FancyButton.vue'
import IconCommunity from './components/icons/IconCommunity.vue'
import IconDocumentation from './components/icons/IconDocumentation.vue'
import IconEcosystem from './components/icons/IconEcosystem.vue'
import IconSupport from './components/icons/IconSupport.vue'
import IconTooling from './components/icons/IconTooling.vue'
import BaseLayout from './components/BaseLayout.vue'
import MouseTracker from './components/MouseTracker.vue'
import ProvideInject from './components/ProvideInject.vue'
import LoadingComponent from './components/LoadingComponent.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import TestReusability from './views/TestReusability.vue'
import CompReusability from './components/CompReusability.vue'
import BuiltInComponents from './components/BuiltInComponents.vue'
import MyTransition from './components/MyTransition.vue'
import MyModal from './components/MyModal.vue'

const app = createApp(App)

app
  // Components
  .component('AlertBox', AlertBox)
  .component('BaseLayout', BaseLayout)
  .component('BlogPost', BlogPost)
  .component('BuiltInComponents', BuiltInComponents)
  .component('ButtonCounter', ButtonCounter)
  .component('FancyButton', FancyButton)
  // .component('MouseTracker', MouseTracker)
  .component('MyComponent', MyComponent)
  .component('MyModal', MyModal)
  .component('MyTransition', MyTransition)
  .component('ProvideInject', ProvideInject)
  .component('TodoItem',TodoItem)
  .component('LoadingComponent', LoadingComponent)
  .component('ErrorComponent', ErrorComponent)
  .component('CompReusability',CompReusability)

  // Async Component
  .component('MouseTracker', defineAsyncComponent(() =>
    import('./components/MouseTracker.vue')
  ))

  // Views
  .component('TestEssentials', TestEssentials)
  .component('ComponentsDepth', ComponentsDepth)
  .component('TestReusability', TestReusability)

  // Icons
  .component('IconCommunity', IconCommunity)
  .component('IconDocumentation', IconDocumentation)
  .component('IconEcosystem', IconEcosystem)
  .component('IconSupport', IconSupport)
  .component('IconTooling', IconTooling)


app.use(createPinia())
app.use(router)

app.mount('#app')
