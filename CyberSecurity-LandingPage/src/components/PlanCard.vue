<script setup lang="ts">
import type { Component } from 'vue';
import { ArrowRight } from 'lucide-vue-next';

defineProps<{
  name: string;
  price: string;
  period: string;
  icon: Component;
  description: string;
  features: string[];
  recommended: boolean;
  badge?: string;
  index: number;
  isVisible: boolean;
}>();

const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div :class="[
    'group relative rounded-2xl overflow-hidden transition-all duration-700 transform hover:-translate-y-4 hover:scale-105',
    recommended 
      ? 'bg-gradient-to-br from-navy to-navy-dark text-white shadow-2xl border-2 border-gold scale-105' 
      : 'bg-white dark:bg-navy-light border border-gray-300 dark:border-navy shadow-lg hover:shadow-2xl',
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
  ]"
  :style="{ transitionDelay: `${index * 200}ms` }"
  >
    <!-- Recommended badge - positioned inside the card -->
    <div v-if="recommended" class="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
      <div class="bg-gradient-to-r from-gold to-yellow-300 text-navy px-6 py-2 rounded-full text-sm font-bold shadow-lg">
        {{ badge || 'MOST POPULAR' }}
      </div>
    </div>

    <!-- Badge for non-recommended plans -->
    <div v-else-if="badge" class="absolute top-4 right-4 z-10">
      <div class="bg-gold text-navy px-3 py-1 rounded-full text-xs font-bold">
        {{ badge }}
      </div>
    </div>

    <!-- Gradient overlay for hover effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-gold/10 transition-all duration-300"></div>
    
    <div class="relative p-8 h-full flex flex-col">
      <!-- Add top padding when there's a recommended badge -->
      <div :class="['flex items-center justify-between', recommended ? 'mt-8 mb-6' : 'mb-6']">
        <div class="flex-1">
          <h3 :class="[
            'text-2xl font-bold mb-2 group-hover:text-gold transition-colors duration-300',
            recommended ? 'text-white' : 'text-navy dark:text-white'
          ]">
            {{ name }}
          </h3>
          <p :class="[
            'text-sm opacity-80',
            recommended ? 'text-gray-300' : 'text-navy-light dark:text-gray-400'
          ]">
            {{ description }}
          </p>
        </div>
        <div :class="[
          'w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110',
          recommended ? 'bg-gold/20' : 'bg-gold/10'
        ]">
          <component 
            :is="icon" 
            :class="[
              'w-8 h-8 transition-all duration-300 group-hover:scale-110',
              recommended ? 'text-gold' : 'text-navy dark:text-gold'
            ]"
          />
        </div>
      </div>
      
      <div class="mb-8">
        <div class="flex items-baseline">
          <span :class="[
            'text-4xl font-bold transition-colors duration-300',
            recommended ? 'text-gold group-hover:text-yellow-300' : 'text-navy dark:text-gold group-hover:text-gold'
          ]">
            {{ price }}
          </span>
          <span :class="[
            'text-lg ml-1',
            recommended ? 'text-gray-300' : 'text-navy-light dark:text-gray-400'
          ]">
            {{ period }}
          </span>
        </div>
      </div>
      
      <ul class="space-y-4 flex-grow mb-8">
        <li 
          v-for="(feature, featureIndex) in features" 
          :key="featureIndex" 
          class="flex items-start group/item"
        >
          <span 
            :class="[
              'mr-3 mt-1 text-sm font-bold transition-all duration-300 group-hover/item:scale-125',
              recommended ? 'text-gold' : 'text-navy dark:text-gold'
            ]"
          >
            ✓
          </span>
          <span :class="[
            'transition-colors duration-300',
            recommended 
              ? 'text-gray-200 group-hover/item:text-white' 
              : 'text-navy-light dark:text-gray-300 group-hover/item:text-navy dark:group-hover/item:text-white'
          ]">
            {{ feature }}
          </span>
        </li>
      </ul>
      
      <button 
        @click="scrollToContact"
        :class="[
          'group/btn w-full py-4 text-center rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1',
          recommended 
            ? 'bg-gold hover:bg-yellow-300 text-navy' 
            : 'bg-navy hover:bg-navy-light text-white dark:bg-gold dark:hover:bg-yellow-300 dark:text-navy'
        ]"
      >
        Get Started
        <ArrowRight class="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  </div>
</template>