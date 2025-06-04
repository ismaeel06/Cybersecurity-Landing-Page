<script setup lang="ts">
import { ref } from 'vue';
import { Sun, Moon, Menu, X } from 'lucide-vue-next';
import { Shield } from 'lucide-vue-next';

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
          <Shield class="w-10 h-10" />
        </div>
        <div>
          <h1 class="text-xl md:text-2xl font-bold">
            <span class="text-navy dark:text-white">MiniGuard</span><span class="text-gold">Tech</span>
          </h1>
          <p class="text-xs text-navy-light dark:text-gold font-medium">Big Protection. Always Got Your Back.</p>
        </div>
      </div>

      <!-- Desktop navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#home" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-all hover:scale-105 cursor-pointer">Home</a>
        <a href="#services" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-all hover:scale-105 cursor-pointer">Services</a>
        <a href="#plans" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-all hover:scale-105 cursor-pointer">Plans</a>
        <a href="#contact" class="text-navy dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-all hover:scale-105 cursor-pointer">Contact</a>
        
        <!-- Dark mode toggle -->
        <button 
          @click="emit('toggleDarkMode')" 
          class="p-2 rounded-full border-2 border-navy dark:border-gold hover:bg-gray-100 dark:hover:bg-navy-light transition-all hover:shadow-md cursor-pointer" 
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
          class="p-2 mr-2 rounded-full border-2 border-navy dark:border-gold hover:bg-gray-100 dark:hover:bg-navy-light transition-all hover:shadow-md cursor-pointer"
          aria-label="Toggle dark mode"
        >
          <Sun v-if="isDarkMode" class="text-gold w-5 h-5" />
          <Moon v-else class="text-navy w-5 h-5" />
        </button>
        
        <button 
          @click="toggleMenu" 
          class="p-2 rounded-md text-navy dark:text-white hover:bg-gray-100 dark:hover:bg-navy-light transition-all hover:shadow-md cursor-pointer" 
          aria-label="Toggle menu"
        >
          <Menu v-if="!isMenuOpen" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-navy shadow-lg transition-all duration-300 ease-in-out">
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <a @click="closeMenu" href="#home" class="text-navy-dark dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-colors py-2 cursor-pointer">Home</a>
        <a @click="closeMenu" href="#services" class="text-navy-dark dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-colors py-2 cursor-pointer">Services</a>
        <a @click="closeMenu" href="#plans" class="text-navy-dark dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-colors py-2 cursor-pointer">Plans</a>
        <a @click="closeMenu" href="#contact" class="text-navy-dark dark:text-gold hover:text-gold dark:hover:text-white font-medium transition-colors py-2 cursor-pointer">Contact</a>
      </div>
    </div>
  </header>
  <!-- Spacer to prevent content from hiding under fixed header -->
  <div class="h-20"></div>
</template>

<style scoped>
a {
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: var(--color-gold);
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

.text-navy-light {
  color: #19273C;
}

html.dark .text-navy-light {
  color: var(--color-gold);
}
</style>