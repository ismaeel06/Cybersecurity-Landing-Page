<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Mail, Phone, MapPin, Shield, ExternalLink } from 'lucide-vue-next';

const isVisible = ref(false);
const currentYear = new Date().getFullYear();

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  });
  
  const element = document.querySelector('footer');
  if (element) {
    observer.observe(element);
  }
});

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const quickLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Plans', id: 'plans' },
  { name: 'Contact', id: 'contact' }
];

const services = [
  { name: 'Free Cyber Snapshot', id: 'services' },
  { name: 'Security Tune-Up', id: 'services' },
  { name: 'Monthly Support', id: 'plans' },
  { name: 'Business Armor', id: 'plans' },
  { name: 'EliteGuard', id: 'plans' }
];
</script>

<template>
  <footer class="bg-gradient-to-br from-navy to-navy-dark text-white py-16 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full filter blur-2xl"></div>
      <div class="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company info -->
        <div :class="['lg:col-span-2 transform transition-all duration-1000', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <div class="flex items-center mb-6 group cursor-pointer" @click="scrollToSection('home')">
            <div class="mr-4 text-gold transform group-hover:scale-110 transition-transform duration-300">
              <Shield class="w-10 h-10" />
            </div>
            <div>
              <h3 class="text-2xl md:text-3xl font-bold">
                <span class="text-white">MiniGuard</span>
                <span class="text-gold">Tech</span>
              </h3>
              <p class="text-sm text-gray-400">Big Protection. Always Got Your Back.</p>
            </div>
          </div>
          
          <p class="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
            MiniGuardTech provides affordable, easy-to-understand cybersecurity 
            solutions designed specifically for small businesses.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-center group hover:text-gold transition-colors duration-300">
              <Phone class="w-5 h-5 text-gold mr-3 group-hover:scale-110 transition-transform duration-300" />
              <a href="tel:+14433193515" class="text-gray-300 hover:text-gold transition-colors duration-300">
                (443) 319-3515
              </a>
            </div>
            <div class="flex items-center group hover:text-gold transition-colors duration-300">
              <Mail class="w-5 h-5 text-gold mr-3 group-hover:scale-110 transition-transform duration-300" />
              <a href="mailto:info@miniguardtech.com" class="text-gray-300 hover:text-gold transition-colors duration-300">
                info@miniguardtech.com
              </a>
            </div>
            <div class="flex items-start group hover:text-gold transition-colors duration-300">
              <MapPin class="w-5 h-5 text-gold mr-3 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div class="text-gray-300">
                <span>123 Tech Street, Suite 101</span><br>
                <span>Baltimore, MD 21201</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div :class="['transform transition-all duration-1000 delay-200', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <h3 class="text-lg font-semibold mb-6 text-gold">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.id">
              <button 
                @click="scrollToSection(link.id)"
                class="text-gray-300 hover:text-gold transition-all duration-300 hover:pl-2 flex items-center group"
              >
                {{ link.name }}
                <ExternalLink class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div :class="['transform transition-all duration-1000 delay-300', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <h3 class="text-lg font-semibold mb-6 text-gold">Services</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <button 
                @click="scrollToSection(service.id)"
                class="text-gray-300 hover:text-gold transition-all duration-300 hover:pl-2 flex items-center group text-left"
              >
                {{ service.name }}
                <ExternalLink class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom footer -->
      <div :class="['border-t border-navy-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center transform transition-all duration-1000 delay-500', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {{ currentYear }} MiniGuardTech. All rights reserved.
        </p>
        
        <div class="flex space-x-6">
          <a href="#" class="text-gray-300 hover:text-gold transition-colors duration-300 text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="#" class="text-gray-300 hover:text-gold transition-colors duration-300 text-sm hover:underline">
            Terms of Service
          </a>
          <a href="#" class="text-gray-300 hover:text-gold transition-colors duration-300 text-sm hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>

      <!-- Trust indicators -->
      <div :class="['mt-8 pt-8 border-t border-navy-light text-center transform transition-all duration-1000 delay-700', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
        <p class="text-gray-400 text-xs">
          🔒 Your data is protected with enterprise-grade security measures
        </p>
      </div>
    </div>
  </footer>
</template>