import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// import axios from 'axios'
// createApp({
//   data() {
//     return {
//       productName: '',
//       searchResults: [],
//       selectedVideos: []
//     }
//   },
//   methods: {
//     async searchYoutube() {
//       const response = await axios.get('http://127.0.0.1:8000/reviews-youtube', {
//         params: { target_product: this.productName }
//       })
//       this.reviews = response.data.reviews // Assuming your API response structure
//     }

//     // // this hits Youtube API directly
//     // async searchYoutube() {
//     //   console.log('TISHEntered searchYoutube')
//     //   try {
//     //     const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//     //       params: {
//     //         part: 'snippet',
//     //         maxResults: 25,
//     //         q: `${this.productName} review`,
//     //         type: 'video',
//     //         key: import.meta.env.VITE_YOUTUBE_API_KEY
//     //       }
//     //     })
//     //     this.searchResults = response.data.items
//     //   } catch (error) {
//     //     console.error(error)
//     //   }
//     // }
//   }
// }).mount('#app')
