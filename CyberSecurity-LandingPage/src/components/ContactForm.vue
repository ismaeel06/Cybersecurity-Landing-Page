<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Send, CheckCircle, AlertCircle } from 'lucide-vue-next';

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  });
  
  const element = document.getElementById('contact');
  if (element) {
    observer.observe(element);
  }
});

// Form data
const formData = ref({
  name: '',
  email: '',
  phone: '',
  industry: '',
  role: '',
  company: '',
  message: ''
});

// Form states
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const errors = ref<Record<string, string>>({});
const submissionError = ref<string | null>(null);

// PepoForm configuration
const PEPOFORM_ENDPOINT = 'https://submit-form.com/your-pepoform-id'; // Replace with your actual PepoForm ID

// Validate a single field
const validateField = (field: keyof typeof formData.value): boolean => {
  delete errors.value[field];
  
  switch (field) {
    case 'name':
      if (!formData.value.name.trim()) {
        errors.value.name = 'Name is required';
        return false;
      }
      if (formData.value.name.trim().length < 2) {
        errors.value.name = 'Name must be at least 2 characters';
        return false;
      }
      break;
    case 'email':
      if (!formData.value.email.trim()) {
        errors.value.email = 'Email is required';
        return false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
        errors.value.email = 'Please enter a valid email address';
        return false;
      }
      break;
    case 'phone':
      if (formData.value.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.value.phone.replace(/[\s\-$$$$]/g, ''))) {
        errors.value.phone = 'Please enter a valid phone number';
        return false;
      }
      break;
  }
  
  return true;
};

// Validate the entire form
const validateForm = (): boolean => {
  errors.value = {};
  const requiredFields: Array<keyof typeof formData.value> = ['name', 'email'];
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  
  const optionalFields: Array<keyof typeof formData.value> = ['phone', 'industry', 'role', 'company', 'message'];
  
  optionalFields.forEach(field => {
    if (formData.value[field] && !validateField(field)) {
      isValid = false;
    }
  });
  
  return isValid;
};

// Reset the form after submission
const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    industry: '',
    role: '',
    company: '',
    message: ''
  };
  isSubmitted.value = false;
  submissionError.value = null;
};

// Handle form submission
const handleSubmit = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  submissionError.value = null;
  
  try {
    // Simulate API call for demo
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Uncomment for real submission
    // const response = await fetch(PEPOFORM_ENDPOINT, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     ...formData.value,
    //     source: 'MiniGuardTech Website',
    //     page: 'Landing Page',
    //     date: new Date().toISOString()
    //   })
    // });
    
    // if (!response.ok) {
    //   throw new Error('Form submission failed');
    // }
    
    isSubmitted.value = true;
    
  } catch (error) {
    console.error('Form submission error:', error);
    submissionError.value = 'There was an error submitting the form. Please try again later.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-20 bg-white dark:bg-navy-light transition-all duration-500">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div :class="['text-center mb-12 transform transition-all duration-1000', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">          <h2 class="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Get In <span class="text-gold">Touch</span>
          </h2>
          <p class="text-navy-light dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to secure your business? Fill out the form below to schedule your free Cyber Snapshot 
            or learn more about our services.
          </p>
        </div>
        
        <!-- Success message -->
        <div v-if="isSubmitted" :class="['transform transition-all duration-1000', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl shadow-lg border-l-4 border-green-500 mb-8">
            <div class="flex items-center mb-4">
              <CheckCircle class="w-8 h-8 text-green-500 mr-3" />            <h3 class="text-2xl font-bold text-navy dark:text-white">Thank You!</h3>
            </div>
            <p class="text-navy-light dark:text-gray-300 mb-6 text-lg">
              Your message has been received. A member of our team will reach out to you shortly to discuss your cybersecurity needs.
            </p>            <button 
              @click="resetForm" 
              class="group px-6 py-3 bg-navy dark:bg-gold text-white dark:text-navy rounded-xl hover:bg-navy-light dark:hover:bg-yellow-300 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Submit Another Request
              <Send class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        <!-- Contact form -->
        <form v-else @submit.prevent="handleSubmit" :class="['bg-white dark:bg-navy rounded-2xl shadow-2xl p-8 border border-gray-300 dark:border-navy transform transition-all duration-1000', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <!-- Error message if form submission fails -->
          <div v-if="submissionError" class="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg">
            <div class="flex items-center">
              <AlertCircle class="w-5 h-5 text-red-500 mr-2" />
              <p class="text-red-700 dark:text-red-300">{{ submissionError }}</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Name field -->
            <div class="group">              <label for="name" class="block text-sm font-semibold text-navy dark:text-gray-200 mb-2">
                Name *
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white dark:bg-navy-light text-navy dark:text-white border-gray-300 dark:border-navy-light transition-all duration-300 group-hover:border-gold/50"
                :class="errors.name ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : ''"
                @blur="validateField('name')"
                placeholder="Your full name"
              />
              <p v-if="errors.name" class="mt-2 text-sm text-red-500 flex items-center">
                <AlertCircle class="w-4 h-4 mr-1" />
                {{ errors.name }}
              </p>
            </div>
            
            <!-- Email field -->
            <div class="group">              <label for="email" class="block text-sm font-semibold text-navy dark:text-gray-200 mb-2">
                Email *
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white dark:bg-navy-light text-navy dark:text-white border-gray-300 dark:border-navy-light transition-all duration-300 group-hover:border-gold/50"
                :class="errors.email ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : ''"
                @blur="validateField('email')"
                placeholder="your.email@company.com"
              />
              <p v-if="errors.email" class="mt-2 text-sm text-red-500 flex items-center">
                <AlertCircle class="w-4 h-4 mr-1" />
                {{ errors.email }}
              </p>
            </div>
            
            <!-- Phone field -->
            <div class="group">              <label for="phone" class="block text-sm font-semibold text-navy dark:text-gray-200 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white dark:bg-navy-light text-navy dark:text-white border-gray-300 dark:border-navy-light transition-all duration-300 group-hover:border-gold/50"
                :class="errors.phone ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : ''"
                @blur="validateField('phone')"
                placeholder="(555) 123-4567"
              />
              <p v-if="errors.phone" class="mt-2 text-sm text-red-500 flex items-center">
                <AlertCircle class="w-4 h-4 mr-1" />
                {{ errors.phone }}
              </p>
            </div>
            
            <!-- Industry field -->
            <div class="group">              <label for="industry" class="block text-sm font-semibold text-navy dark:text-gray-200 mb-2">
                Industry
              </label>
              <input
                id="industry"
                v-model="formData.industry"
                type="text"
                class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white dark:bg-navy-light text-navy dark:text-white border-gray-300 dark:border-navy-light transition-all duration-300 group-hover:border-gold/50"
                placeholder="e.g., Healthcare, Finance, Retail"
              />
            </div>
            
            <!-- Role field -->
            <div class="group">              <label for="role" class="block text-sm font-semibold text-navy dark:text-gray-200 mb-2">
                Your Role
              </label>
              <input
                id="role"
                v-model="formData.role"
                type="text"
                class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white dark:bg-navy-light text-navy dark:text-white border-gray-300 dark:border-navy-light transition-all duration-300 group-hover:border-gold/50"
                placeholder="e.g., CEO, IT Manager, Owner"
              />
            </div>
            
            <!-- Company field -->
            <div class="group">              <label for="company" class="block text-sm font-semibold text-navy dark:text-gray-200 mb-2">
                Company Name
              </label>
              <input
                id="company"
                v-model="formData.company"
                type="text"
                class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white dark:bg-navy-light text-navy dark:text-white border-gray-300 dark:border-navy-light transition-all duration-300 group-hover:border-gold/50"
                placeholder="Your company name"
              />
            </div>
          </div>
          
          <!-- Message field -->
          <div class="mt-6 group">            <label for="message" class="block text-sm font-semibold text-navy dark:text-gray-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white dark:bg-navy-light text-navy dark:text-white border-gray-300 dark:border-navy-light transition-all duration-300 group-hover:border-gold/50 resize-none"
              placeholder="Tell us about your cybersecurity needs or questions..."
            ></textarea>
          </div>
          
          <!-- GDPR Consent -->
          <div class="mt-6">
            <div class="flex items-start">
              <input
                id="gdpr-consent"
                type="checkbox"
                required
                class="w-5 h-5 mt-1 text-gold focus:ring-gold border-gray-300 rounded transition-all duration-300"
              />              <label for="gdpr-consent" class="ml-3 text-sm text-navy-light dark:text-gray-300 leading-relaxed">
                I consent to MiniGuardTech collecting my submitted information so they can respond to my inquiry. 
                Your information is secure and will never be shared with third parties.
              </label>
            </div>
          </div>
          
          <!-- Submit button -->
          <div class="mt-8">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="group w-full px-8 py-4 bg-gradient-to-r from-gold to-yellow-300 hover:from-yellow-300 hover:to-gold text-navy font-bold rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <div v-if="isSubmitting" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </div>
              <div v-else class="flex items-center">
                Schedule Your Free Cyber Snapshot
                <Send class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>