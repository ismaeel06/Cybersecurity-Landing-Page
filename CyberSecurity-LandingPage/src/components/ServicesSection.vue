<script setup lang="ts">
import { ref } from 'vue';
import { Shield, Zap, Clock } from 'lucide-vue-next';

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
    primary: false
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
    primary: true
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
    primary: false
  }
]);
</script>

<template>
  <section id="services" class="py-20 bg-gray-50 dark:bg-navy-light transition-colors">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">Our Services</h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We provide straightforward cybersecurity solutions designed specifically for small businesses without the technical jargon.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Cards -->
        <div 
          v-for="service in services" 
          :key="service.id" 
          :class="[
            'rounded-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2',
            service.primary 
              ? 'bg-navy dark:bg-navy-dark text-white shadow-xl border-2 border-gold' 
              : 'bg-white dark:bg-navy border border-gray-200 dark:border-navy-light shadow-md'
          ]"
        >
          <div class="p-8">
            <div class="mb-6">
              <component 
                :is="service.icon" 
                :class="[
                  'w-12 h-12',
                  service.primary ? 'text-gold' : 'text-navy dark:text-gold'
                ]"
              />
            </div>
            
            <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
            <p 
              :class="[
                'text-sm mb-4',
                service.primary ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'
              ]"
            >
              {{ service.subtitle }}
            </p>
            
            <p 
              :class="[
                'text-2xl font-bold mb-6',
                service.primary ? 'text-gold' : 'text-navy dark:text-gold'
              ]"
            >
              {{ service.price }}
            </p>
            
            <ul class="space-y-3">
              <li 
                v-for="(feature, index) in service.features" 
                :key="index" 
                class="flex items-start"
              >
                <span 
                  :class="[
                    'mr-2 mt-1 text-sm',
                    service.primary ? 'text-gold' : 'text-navy dark:text-gold'
                  ]"
                >
                  ✓
                </span>
                <span :class="service.primary ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'">
                  {{ feature }}
                </span>
              </li>
            </ul>
            
            <div class="mt-8">
              <a 
                href="#contact" 
                :class="[
                  'block w-full py-3 text-center rounded-md font-medium transition-colors',
                  service.primary 
                    ? 'bg-gold hover:bg-yellow-300 text-navy' 
                    : 'bg-navy hover:bg-navy-dark text-white dark:bg-gold dark:hover:bg-yellow-300 dark:text-navy'
                ]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
