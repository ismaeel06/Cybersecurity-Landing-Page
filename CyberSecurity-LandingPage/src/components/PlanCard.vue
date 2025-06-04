<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  name: string;
  price: string;
  period: string;
  icon: Component;
  description: string;
  features: string[];
  recommended: boolean;
}>();
</script>

<template>
  <div :class="[
    'rounded-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2',
    recommended 
      ? 'bg-navy dark:bg-navy-dark text-white shadow-xl border-2 border-gold' 
      : 'bg-white dark:bg-navy border border-gray-200 dark:border-navy-light shadow-md'
  ]">
    <!-- Recommended badge -->
    <div v-if="recommended" class="bg-gold text-navy text-center py-1 text-sm font-medium">
      MOST POPULAR
    </div>
    
    <div class="p-8">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h3 class="text-xl font-bold">{{ name }}</h3>
          <p :class="[
            'text-sm',
            recommended ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'
          ]">
            {{ description }}
          </p>
        </div>
        <component 
          :is="icon" 
          :class="[
            'w-10 h-10',
            recommended ? 'text-gold' : 'text-navy dark:text-gold'
          ]"
        />
      </div>
      
      <div class="mb-6">
        <span :class="[
          'text-3xl font-bold',
          recommended ? 'text-gold' : 'text-navy dark:text-gold'
        ]">
          {{ price }}
        </span>
        <span :class="recommended ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'">
          {{ period }}
        </span>
      </div>
      
      <ul class="space-y-3 mb-8">
        <li 
          v-for="(feature, index) in features" 
          :key="index" 
          class="flex items-start"
        >
          <span 
            :class="[
              'mr-2 mt-1 text-sm',
              recommended ? 'text-gold' : 'text-navy dark:text-gold'
            ]"
          >
            ✓
          </span>
          <span :class="recommended ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'">
            {{ feature }}
          </span>
        </li>
      </ul>
      
      <a 
        href="#contact" 
        :class="[
          'block w-full py-3 text-center rounded-md font-medium transition-colors',
          recommended 
            ? 'bg-gold hover:bg-yellow-300 text-navy' 
            : 'bg-navy hover:bg-navy-dark text-white dark:bg-gold dark:hover:bg-yellow-300 dark:text-navy'
        ]"
      >
        Get Started
      </a>
    </div>
  </div>
</template>
