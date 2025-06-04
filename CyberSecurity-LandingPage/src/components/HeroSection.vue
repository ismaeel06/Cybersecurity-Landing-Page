<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Shield, CheckCircle, ArrowRight } from 'lucide-vue-next';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <!-- Changed background gradient classes for proper light mode -->
  <section id="home" class="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-navy transition-all duration-500">
    <!-- Enhanced background pattern -->
    <div class="absolute inset-0 opacity-20 dark:opacity-30">
      <div class="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-gold to-yellow-300 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-2xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <!-- Hero content -->
        <div class="w-full lg:w-1/2 space-y-8">
          <div :class="['transform transition-all duration-1000', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span class="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient">
                Cybersecurity
              </span> 
              <br />
              <span class="text-navy dark:text-white">Made Simple for</span>
              <br />
              <span class="text-navy dark:text-white">Small Business</span>
            </h1>
          </div>
          
          <div :class="['transform transition-all duration-1000 delay-300', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <p class="text-navy-light dark:text-white font-medium text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Affordable protection for your business with personalized security that's easy to understand and implement.
            </p>
          </div>
          
          <div :class="['transform transition-all duration-1000 delay-500', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <div class="flex flex-col sm:flex-row gap-4">
              <!-- Primary button - consistent in both modes -->
              <button 
                @click="scrollToSection('contact')"
                class="group px-8 py-4 bg-gradient-to-r from-gold to-yellow-300 hover:from-yellow-300 hover:to-gold text-navy font-semibold rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Get Your Free Cyber Snapshot
                <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <!-- Secondary button - adjusted for better visibility in both modes -->
              <button 
                @click="scrollToSection('services')"
                class="group px-8 py-4 bg-transparent border-2 border-navy dark:border-gold text-navy dark:text-gold hover:bg-navy hover:text-white dark:hover:bg-gold dark:hover:text-black rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                See Our Services
                <Shield class="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        
        <!-- Hero visualization card - works in both modes -->
        <div :class="['w-full lg:w-1/2 transform transition-all duration-1000 delay-700', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <!-- Made the card color explicit so it's always navy in both modes -->
          <div class="bg-gradient-to-br from-navy to-navy-dark p-8 rounded-2xl shadow-2xl text-white border border-gold/20 hover:border-gold/40 transition-all duration-300 transform hover:scale-105">
            <!-- Header -->
            <div class="flex items-center mb-6">
              <div class="mr-4 text-gold">
                <Shield class="w-12 h-12" />
              </div>
              <div>
                <h2 class="text-2xl md:text-3xl font-bold">
                  <span class="text-white">MiniGuard</span>
                  <span class="text-gold">Tech</span>
                </h2>
                <p class="text-sm text-gray-300">Big Protection. Always Got Your Back.</p>
              </div>
            </div>
            
            <!-- Service options with enhanced styling -->
            <div class="space-y-4 mb-6">
              <div class="group border-2 border-gold/30 hover:border-gold rounded-xl p-4 transition-all duration-300 hover:bg-navy-light cursor-pointer">
                <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-gold transition-colors">ONE-TIME SERVICE</h3>
                <p class="text-gold text-lg font-semibold">Starting at $297+</p>
              </div>
              
              <div class="group border-2 border-gold/30 hover:border-gold rounded-xl p-4 transition-all duration-300 hover:bg-navy-light cursor-pointer">
                <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-gold transition-colors">QUARTERLY CHECKUPS</h3>
                <p class="text-gold text-lg font-semibold">Starting at $149/qtr</p>
              </div>
              
              <div class="group border-2 border-gold/30 hover:border-gold rounded-xl p-4 transition-all duration-300 hover:bg-navy-light cursor-pointer">
                <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-gold transition-colors">MONTHLY SUPPORT</h3>
                <p class="text-gold text-lg font-semibold">Starting at $99/mo</p>
              </div>
            </div>
            
            <!-- Enhanced services list -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="flex items-center group">
                <CheckCircle class="text-gold mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span class="text-sm text-gray-200 group-hover:text-white transition-colors">Password & Wi-Fi Setup</span>
              </div>
              <div class="flex items-center group">
                <CheckCircle class="text-gold mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span class="text-sm text-gray-200 group-hover:text-white transition-colors">Network Security</span>
              </div>
              <div class="flex items-center group">
                <CheckCircle class="text-gold mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span class="text-sm text-gray-200 group-hover:text-white transition-colors">Data Backup</span>
              </div>
              <div class="flex items-center group">
                <CheckCircle class="text-gold mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span class="text-sm text-gray-200 group-hover:text-white transition-colors">Antivirus Protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes gradient {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

</style>