<script setup>
import { ref, onMounted } from "vue"

const activities = ref([])
const loading = ref(true)

async function fetchActivities() {
  try {
    const response = await fetch("http://localhost:5000/api/feed")
    const data = await response.json()
    activities.value = data
  } catch (error) {
    console.error("Error fetching activities:", error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchActivities()
})
</script>

<template>
  <div class="container">
    <h1>Activity Feed</h1>

    <div v-if="loading">Loading...</div>

    <div v-for="item in activities" :key="item._id" class="card">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<style>
.container {
  width: 600px;
  margin: auto;
  font-family: Arial;
}

.card {
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
</style>