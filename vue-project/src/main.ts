
import { createApp, defineAsyncComponent, onMounted } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ButtonCounter from './components/ButtonCounter.vue'
import AlertBox from './components/AlertBox.vue'
import TodoItem from './components/TodoItem.vue'
import TestEssentials from './components/TestEssentials.vue'
import MyComponent from './components/MyComponent.vue'
import IconCommunity from './components/icons/IconCommunity.vue'
import IconDocumentation from './components/icons/IconDocumentation.vue'
import IconEcosystem from './components/icons/IconEcosystem.vue'
import IconSupport from './components/icons/IconSupport.vue'
import IconTooling from './components/icons/IconTooling.vue'
import MouseTracker from './components/MouseTracker.vue'
import ProvideInject from './components/ProvideInject.vue'
import LoadingComponent from './components/LoadingComponent.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import TestReusability from './views/TestReusability.vue'
import CompReusability from './components/CompReusability.vue'
import BuiltInComponents from './components/BuiltInComponents.vue'
import MyTransition from './components/MyTransition.vue'
import MyModal from './components/MyModal.vue'
import TestCompsView from './views/TestCompsView.vue'
import ExtraTopicsView from './views/ExtraTopicsView.vue'
import TestBuiltIn from './views/TestBuiltIn.vue'
import ExTopicsComp from './components/ExTopicsComp.vue'
import UtilFormsview from './views/UtilFormsview.vue'
import UtilForms from './components/UtilForms.vue'
import CustomForm from './components/CustomForm.vue'

const app = createApp(App)

app
  // Components
  .component('AlertBox', AlertBox)
  .component('BuiltInComponents', BuiltInComponents)
  .component('ButtonCounter', ButtonCounter)
  // .component('MouseTracker', MouseTracker)
  .component('MyComponent', MyComponent)
  .component('MyModal', MyModal)
  .component('MyTransition', MyTransition)
  .component('ProvideInject', ProvideInject)
  .component('TodoItem',TodoItem)
  .component('LoadingComponent', LoadingComponent)
  .component('ErrorComponent', ErrorComponent)
  .component('CompReusability',CompReusability)
  .component('ExTopicsComp', ExTopicsComp)
  .component('UtilForms', UtilForms)
  .component('CustomForm', CustomForm)

  // Async Component
  .component('MouseTracker', defineAsyncComponent(() =>
    import('./components/MouseTracker.vue')
  ))

  // Views
  .component('TestCompsView', TestCompsView)
  .component('TestEssentials', TestEssentials)
  .component('TestBuiltIn', TestBuiltIn)
  .component('TestReusability', TestReusability)
  .component('ExtraTopicsView', ExtraTopicsView)

  // Icons
  .component('IconCommunity', IconCommunity)
  .component('IconDocumentation', IconDocumentation)
  .component('IconEcosystem', IconEcosystem)
  .component('IconSupport', IconSupport)
  .component('IconTooling', IconTooling)
  .component('UtilFormsView', UtilFormsview)


app.use(createPinia())
app.use(router)

app.mount('#app')
