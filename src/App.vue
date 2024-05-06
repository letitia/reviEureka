<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const targetProduct = ref('')
const youtubeResults = ref([])
const finalReport = ref('')

const searchReviews = async () => {
  const response = await axios.get('http://127.0.0.1:8000/reviews-youtube', {
    params: { target_product: targetProduct.value }
  })
  youtubeResults.value = response.data.reviews // Assuming your API response structure
}
</script>

<template>
  <div>
    <input type="text" v-model="targetProduct" placeholder="Enter product name" />
    <button @click="searchReviews">Search YouTube</button>
  </div>
  <div>
    <div v-if="youtubeResults.length > 0">
      <h2>YouTube Review Search Results</h2>
      <div class="grid">
        <div class="card" v-for="result in youtubeResults" :key="result.id">
          <h3>{{ result.title }}</h3>
          <img :src="result.thumbnailUrl" alt="Video Thumbnail" />
          <!-- ... other video details ... -->
        </div>
      </div>
    </div>
    <p v-else>No YouTube results found.</p>
  </div>
  <div>
    <div v-if="finalReport">
      <div>{finalReport}</div>
    </div>
  </div>
</template>
