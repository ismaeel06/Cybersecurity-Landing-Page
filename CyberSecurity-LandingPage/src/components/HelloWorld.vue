<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="text-4xl font-bold text-blue-600">{{ msg }}</h1>

  <div class="p-6 bg-gray-100 rounded-lg shadow-md">
    <button 
      type="button" 
      @click="count++" 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      count is {{ count }}
    </button>
    <p class="mt-4 text-gray-700">
      Edit
      <code class="bg-gray-200 px-1 rounded">components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <!-- rest of your template -->
</template>

<style scoped>
/* You can remove this or keep it for component-specific styles */
.read-the-docs {
  color: #888;
}
</style>