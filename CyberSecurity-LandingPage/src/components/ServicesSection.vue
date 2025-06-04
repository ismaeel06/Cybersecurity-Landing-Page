<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Shield, Zap, Clock, ArrowRight } from 'lucide-vue-next';

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  });
  
  const element = document.getElementById('services');
  if (element) {
    observer.observe(element);
  }
});

// Services data
const services = ref([
  {
    id: 1,
    title: "Free Cyber Snapshot",
    subtitle: "10-Min Audit",
    price: "FREE",
    icon: Shield,
    features: [
      "Quick Cybersecurity Health Check",
      "Wi-Fi, Password, Antivirus & Backup Evaluation",
      "No obligation — just peace of mind"
    ],
    primary: false,
    badge: "Most Popular"
  },
  {
    id: 2,
    title: "One-Time Security Tune-Up",
    subtitle: "Security Foundation",
    price: "$297",
    icon: Zap,
    features: [
      "Wi-Fi security setup",
      "Password & lockdown setup",
      "Antivirus install & check",
      "Automated backups (Google Drive, OneDrive)"
    ],
    primary: true,
    badge: "Best Value"
  },
  {
    id: 3,
    title: "Monthly Support Plans",
    subtitle: "Ongoing Protection",
    price: "From $99/mo",
    icon: Clock,
    features: [
      "Monthly checkups, antivirus & backups",
      "Password help, Wi-Fi monitoring",
      "Premium plans available for additional coverage",
      "Emergency priority service for business-critical issues"
    ],
    primary: false,
    badge: "Premium"
  }
]);

const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section id="services" class="py-20 bg-white dark:bg-navy-light transition-all duration-500">
    <div class="container mx-auto px-4">
      <div :class="['text-center mb-16 transform transition-all duration-1000', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
        <h2 class="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
          Our <span class="text-gold">Services</span>
        </h2>
        <p class="text-navy-light dark:text-gray-300 max-w-2xl mx-auto text-lg">
          We provide straightforward cybersecurity solutions designed specifically for small businesses without the technical jargon.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Cards -->
        <div 
          v-for="(service, index) in services" 
          :key="service.id" 
          :class="[
            'group relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:scale-105',
            service.primary 
              ? 'bg-gradient-to-br from-navy to-navy-dark text-white shadow-2xl border-2 border-gold' 
              : 'bg-white dark:bg-navy border border-gray-300 dark:border-navy-light shadow-lg hover:shadow-2xl',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          ]"
          :style="{ transitionDelay: `${index * 200}ms` }"
        >
          <!-- Badge -->
          <div v-if="service.badge" :class="[
            'absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold z-10',
            service.primary ? 'bg-gold text-navy' : 'bg-gold text-navy'
          ]">
            {{ service.badge }}
          </div>

          <!-- Gradient overlay for hover effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-gold/10 transition-all duration-300"></div>
          
          <div class="relative p-8 h-full flex flex-col">
            <div class="mb-6">
              <div :class="[
                'w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110',
                service.primary ? 'bg-gold/20' : 'bg-gold/10'
              ]">
                <component 
                  :is="service.icon" 
                  :class="[
                    'w-8 h-8 transition-all duration-300 group-hover:scale-110',
                    service.primary ? 'text-gold' : 'text-navy dark:text-gold'
                  ]"
                />
              </div>
            </div>
            
            <h3 :class="[
              'text-2xl font-bold mb-2 group-hover:text-gold transition-colors duration-300',
              service.primary ? 'text-white' : 'text-navy dark:text-white'
            ]">
              {{ service.title }}
            </h3>
            <p :class="[
              'text-sm mb-4 opacity-80',
              service.primary ? 'text-gray-300' : 'text-navy-light dark:text-gray-400'
            ]">
              {{ service.subtitle }}
            </p>
            
            <p :class="[
              'text-3xl font-bold mb-6',
              service.primary ? 'text-gold' : 'text-navy dark:text-gold'
            ]">
              {{ service.price }}
            </p>
            
            <ul class="space-y-3 flex-grow">
              <li 
                v-for="(feature, featureIndex) in service.features" 
                :key="featureIndex" 
                class="flex items-start group/item"
              >
                <span 
                  :class="[
                    'mr-3 mt-1 text-sm font-bold transition-all duration-300 group-hover/item:scale-125',
                    service.primary ? 'text-gold' : 'text-navy dark:text-gold'
                  ]"
                >
                  ✓
                </span>
                <span :class="[
                  'transition-colors duration-300',
                  service.primary 
                    ? 'text-gray-200 group-hover/item:text-white' 
                    : 'text-navy-light dark:text-gray-300 group-hover/item:text-navy dark:group-hover/item:text-white'
                ]">
                  {{ feature }}
                </span>
              </li>
            </ul>
            
            <div class="mt-8">
              <button 
                @click="scrollToContact"
                :class="[
                  'group/btn w-full py-4 text-center rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1',
                  service.primary 
                    ? 'bg-gold hover:bg-yellow-300 text-navy' 
                    : 'bg-navy hover:bg-navy-light text-white dark:bg-gold dark:hover:bg-yellow-300 dark:text-navy'
                ]"
              >
                Get Started
                <ArrowRight class="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>