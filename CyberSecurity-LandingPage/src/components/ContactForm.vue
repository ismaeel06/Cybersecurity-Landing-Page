<script setup lang="ts">
import { ref } from 'vue';

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
  // Clear previous error for this field
  delete errors.value[field];
  
  // Validation rules
  switch (field) {
    case 'name':
      if (!formData.value.name) {
        errors.value.name = 'Name is required';
        return false;
      }
      break;
    case 'email':
      if (!formData.value.email) {
        errors.value.email = 'Email is required';
        return false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.value.email)) {
        errors.value.email = 'Please enter a valid email address';
        return false;
      }
      break;
    case 'phone':
      if (formData.value.phone && !/^[0-9()\-\s+]{7,20}$/.test(formData.value.phone)) {
        errors.value.phone = 'Please enter a valid phone number';
        return false;
      }
      break;
  }
  
  return true;
};

// Validate the entire form
const validateForm = (): boolean => {
  // Reset all errors
  errors.value = {};
  
  // Validate each required field
  const requiredFields: Array<keyof typeof formData.value> = ['name', 'email'];
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  
  // Validate optional fields that have values
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
    // Submit to PepoForm
    const response = await fetch(PEPOFORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData.value,
        // You can add additional metadata here
        source: 'MiniGuardTech Website',
        page: 'Landing Page',
        date: new Date().toISOString()
      })
    });
    
    if (!response.ok) {
      throw new Error('Form submission failed');
    }
    
    // Handle successful submission
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
  <section id="contact" class="py-20 bg-gray-50 dark:bg-navy-light transition-colors">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">Get In Touch</h2>
          <p class="text-gray-600 dark:text-gray-300">
            Ready to secure your business? Fill out the form below to schedule your free Cyber Snapshot 
            or learn more about our services.
          </p>
        </div>
        
        <!-- Success message -->
        <div v-if="isSubmitted" class="success-message bg-white dark:bg-navy-dark p-8 rounded-lg shadow-lg border-l-4 border-green-500 mb-8">
          <h3 class="text-2xl font-bold text-navy dark:text-white mb-2">Thank You!</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Your message has been received. A member of our team will reach out to you shortly to discuss your cybersecurity needs.
          </p>
          <button 
            @click="resetForm" 
            class="px-4 py-2 bg-navy dark:bg-gold text-white dark:text-navy rounded-md hover:bg-opacity-90 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
        
        <!-- Contact form -->
        <form v-else @submit.prevent="handleSubmit" class="bg-white dark:bg-navy rounded-lg shadow-lg p-8">
          <!-- Error message if form submission fails -->
          <div v-if="submissionError" class="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            <p>{{ submissionError }}</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Name field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name *
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white dark:bg-navy-light text-gray-900 dark:text-white border-gray-300 dark:border-navy-light"
                :class="errors.name ? 'border-red-500 focus:ring-red-500' : ''"
                @blur="validateField('name')"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
            </div>
            
            <!-- Email field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email *
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white dark:bg-navy-light text-gray-900 dark:text-white border-gray-300 dark:border-navy-light"
                :class="errors.email ? 'border-red-500 focus:ring-red-500' : ''"
                @blur="validateField('email')"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
            </div>
            
            <!-- Phone field -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white dark:bg-navy-light text-gray-900 dark:text-white border-gray-300 dark:border-navy-light"
                :class="errors.phone ? 'border-red-500 focus:ring-red-500' : ''"
                @blur="validateField('phone')"
              />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-500">{{ errors.phone }}</p>
            </div>
            
            <!-- Industry field -->
            <div>
              <label for="industry" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Industry
              </label>
              <input
                id="industry"
                v-model="formData.industry"
                type="text"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white dark:bg-navy-light text-gray-900 dark:text-white border-gray-300 dark:border-navy-light"
              />
            </div>
            
            <!-- Role field -->
            <div>
              <label for="role" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Role
              </label>
              <input
                id="role"
                v-model="formData.role"
                type="text"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white dark:bg-navy-light text-gray-900 dark:text-white border-gray-300 dark:border-navy-light"
              />
            </div>
            
            <!-- Company field -->
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company Name
              </label>
              <input
                id="company"
                v-model="formData.company"
                type="text"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white dark:bg-navy-light text-gray-900 dark:text-white border-gray-300 dark:border-navy-light"
              />
            </div>
          </div>
          
          <!-- Message field -->
          <div class="mt-6">
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white dark:bg-navy-light text-gray-900 dark:text-white border-gray-300 dark:border-navy-light"
            ></textarea>
          </div>
          
          <!-- GDPR Consent -->
          <div class="mt-4">
            <div class="flex items-start">
              <input
                id="gdpr-consent"
                type="checkbox"
                required
                class="w-4 h-4 mt-1 text-gold focus:ring-gold border-gray-300 rounded"
              />
              <label for="gdpr-consent" class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                I consent to MiniGuardTech collecting my submitted information so they can respond to my inquiry.
              </label>
            </div>
          </div>
          
          <!-- Submit button -->
          <div class="mt-6">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-6 py-3 bg-gold hover:bg-yellow-300 text-navy font-semibold rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Submitting...' : 'Schedule Your Free Cyber Snapshot' }}
            </button>
          </div>
          
          <!-- Form note -->
          <p class="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
            Your information is secure and will never be shared with third parties.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animation for success message */
.success-message {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
