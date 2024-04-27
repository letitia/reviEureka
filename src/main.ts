import './assets/main.css'

import { createApp, ref } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app =
createApp({
  setup() {
    const count = ref(0)
    const incrementCount = () => {
      count.value++
    }
    return {
      count,
      incrementCount
    }
  }
}).mount('#app')

// app.use(router)
