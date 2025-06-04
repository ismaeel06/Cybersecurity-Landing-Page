<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
  // Check if dark mode is already set in HTML
  isDarkMode.value = darkMode.isDark();
  console.log('Initial dark mode state:', isDarkMode.value);
});

// Toggle dark mode
const toggleDarkMode = () => {
  darkMode.toggle();
  isDarkMode.value = darkMode.isDark();
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
</style>