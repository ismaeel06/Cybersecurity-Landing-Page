<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PlanCard from './PlanCard.vue';
import { ShieldCheck, Shield, ShieldAlert } from 'lucide-vue-next';

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  });
  
  const element = document.getElementById('plans');
  if (element) {
    observer.observe(element);
  }
});

// Plan data
const plans = [
  {
    id: 1,
    name: "CyberShield",
    price: "$149",
    period: "/mo",
    icon: ShieldCheck,
    description: "Basic cybersecurity for small teams",
    features: [
      "Monthly checkup",
      "Antivirus & backups",
      "Password help",
      "Wi-Fi monitoring"
    ],
    recommended: false,
    badge: "Starter"
  },
  {
    id: 2,
    name: "Business Armor",
    price: "$299",
    period: "/mo",
    icon: Shield,
    description: "Enhanced protection for growing businesses",
    features: [
      "Unlimited support calls",
      "Phishing training",
      "VPN setup & management",
      "Firewall monitoring",
      "Cloud setup & support"
    ],
    recommended: true,
    badge: "Most Popular"
  },
  {
    id: 3,
    name: "EliteGuard",
    price: "$499",
    period: "/mo",
    icon: ShieldAlert,
    description: "Maximum security for critical operations",
    features: [
      "Onsite visits",
      "Advanced policies",
      "24/7 monitoring",
      "Data recovery",
      "Emergency priority",
      "Custom security solutions"
    ],
    recommended: false,
    badge: "Enterprise"
  }
];
</script>

<template>
  <section id="plans" class="py-20 bg-white dark:bg-navy transition-all duration-500">
    <div class="container mx-auto px-4">
      <div :class="['text-center mb-16 transform transition-all duration-1000', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">        <h2 class="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
          Our Protection <span class="text-gold">Plans</span>
        </h2>
        <p class="text-navy-light dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Choose the level of protection that's right for your business. All plans include core security features with no long-term contracts.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PlanCard 
          v-for="(plan, index) in plans" 
          :key="plan.id"
          :name="plan.name"
          :price="plan.price"
          :period="plan.period"
          :icon="plan.icon"
          :description="plan.description"
          :features="plan.features"
          :recommended="plan.recommended"
          :badge="plan.badge"
          :index="index"
          :is-visible="isVisible"
        />
      </div>
    </div>
  </section>
</template>