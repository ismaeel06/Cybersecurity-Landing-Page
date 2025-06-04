<script setup lang="ts">
import { ref } from 'vue';
import { Sun, Moon, Menu, X } from 'lucide-vue-next';

// Props
defineProps<{
  isDarkMode: boolean;
}>();

// Emits
const emit = defineEmits<{
  (e: 'toggleDarkMode'): void;
}>();

// Mobile menu state
const isMenuOpen = ref(false);

// Toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Close mobile menu when clicking a navigation link
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-navy shadow-md transition-colors duration-300">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <div class="mr-3 text-gold">
          <!-- Shield logo with circuit board pattern -->
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <circle cx="12" cy="10" r="1" />
            <path d="M12 7v2" />
            <path d="M12 13v2" />
            <path d="M9 10h2" />
            <path d="M13 10h2" />
          </svg>
        </div>
        <div>
          <h1 class="text-xl md:text-2xl font-bold">
            <span class="text-navy dark:text-white">MiniGuard</span><span class="text-gold">Tech</span>
          </h1>
          <p class="text-xs text-navy dark:text-gold">Big Protection. Always Got Your Back.</p>
        </div>
      </div>

      <!-- Desktop navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#home" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-colors">Home</a>
        <a href="#services" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-colors">Services</a>
        <a href="#plans" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-colors">Plans</a>
        <a href="#contact" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-colors">Contact</a>
        
        <!-- Dark mode toggle -->
        <button 
          @click="emit('toggleDarkMode')" 
          class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-navy-light transition-colors" 
          aria-label="Toggle dark mode"
        >
          <Sun v-if="isDarkMode" class="text-gold w-5 h-5" />
          <Moon v-else class="text-navy w-5 h-5" />
        </button>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <!-- Dark mode toggle -->
        <button 
          @click="emit('toggleDarkMode')" 
          class="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-navy-light transition-colors"
          aria-label="Toggle dark mode"
        >
          <Sun v-if="isDarkMode" class="text-gold w-5 h-5" />
          <Moon v-else class="text-navy w-5 h-5" />
        </button>
        
        <button @click="toggleMenu" class="p-2 rounded-md text-navy dark:text-white hover:bg-gray-200 dark:hover:bg-navy-light" aria-label="Toggle menu">
          <Menu v-if="!isMenuOpen" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-navy shadow-lg transition-all duration-300 ease-in-out">
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <a @click="closeMenu" href="#home" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white transition-colors py-2">Home</a>
        <a @click="closeMenu" href="#services" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white transition-colors py-2">Services</a>
        <a @click="closeMenu" href="#plans" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white transition-colors py-2">Plans</a>
        <a @click="closeMenu" href="#contact" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white transition-colors py-2">Contact</a>
      </div>
    </div>
  </header>
  <!-- Spacer to prevent content from hiding under fixed header -->
  <div class="h-20"></div>
</template>