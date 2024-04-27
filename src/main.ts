import './assets/main.css'

import { createApp } from 'vue'
import axios from 'axios'

createApp({
  data() {
    return {
      productName: '',
      searchResults: [],
      selectedVideos: []
    }
  },
  methods: {
    async searchYoutube() {
      console.log('TISHEntered searchYoutube')
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 25,
            q: `${this.productName} review`,
            type: 'video',
            key: import.meta.env.VITE_YOUTUBE_API_KEY
          }
        })
        this.searchResults = response.data.items
        // console.log('TISH this.searchResults', this.searchResults)
      } catch (error) {
        console.error(error)
      }
    }
  }
}).mount('#app')
