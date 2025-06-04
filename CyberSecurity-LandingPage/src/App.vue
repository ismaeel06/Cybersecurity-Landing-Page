<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import PlansSection from './components/PlansSection.vue';
import ContactForm from './components/ContactForm.vue';
import FooterSection from './components/FooterSection.vue';
import { darkMode } from './utils/darkMode';

// Dark mode state management
const isDarkMode = ref(false);

// Initialize dark mode from localStorage or system preference
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial dark mode state
  isDarkMode.value = savedTheme === 'dark' || (!savedTheme && prefersDark);
  
  // Apply the class to the HTML element
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  console.log('Initial dark mode state:', isDarkMode.value);
});

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  
  console.log('Dark mode toggled to:', isDarkMode.value);
};
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-navy transition-colors">
    <NavBar :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode" />
    <HeroSection />
    <ServicesSection />
    <PlansSection />
    <ContactForm />
    <FooterSection />
  </div>
</template>

<style>
/* Ensure these styles are applied globally */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Enhance text readability in light mode */
.text-navy {
  color: #011627 !important;
  font-weight: 500;
}

.text-navy-light {
  color: #19273C !important;
}

/* Improve button styling */
button, a {
  cursor: pointer;
}

button:focus, a:focus {
  outline: 2px solid #FEE440;
  outline-offset: 2px;
}

/* Hover effects */
.hover-effect {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hover-effect:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>