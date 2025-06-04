<script setup lang="ts">
import { Mail, Phone, MapPin } from 'lucide-vue-next';

// Current year for copyright
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-navy text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company info -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center mb-4">
            <div class="mr-3 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="10" r="1" />
                <path d="M12 7v2" />
                <path d="M12 13v2" />
                <path d="M9 10h2" />
                <path d="M13 10h2" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold">
                <span class="text-white">MiniGuard</span><span class="text-gold">Tech</span>
              </h3>
              <p class="text-xs text-gray-400">Big Protection. Always Got Your Back.</p>
            </div>
          </div>
          
          <p class="text-gray-300 mb-4">
            MiniGuardTech provides affordable, easy-to-understand cybersecurity 
            solutions designed specifically for small businesses.
          </p>
          
          <ul class="space-y-3">
            <li class="flex items-center">
              <Phone class="w-5 h-5 text-gold mr-3" />
              <span>(443) 319-0515</span>
            </li>
            <li class="flex items-center">
              <Mail class="w-5 h-5 text-gold mr-3" />
              <a href="mailto:info@miniguardtech.com" class="hover:text-gold transition-colors">
                info@miniguardtech.com
              </a>
            </li>
            <li class="flex items-start">
              <MapPin class="w-5 h-5 text-gold mr-3 mt-1" />
              <span>123 Tech Street, Suite 101<br>Baltimore, MD 21201</span>
            </li>
          </ul>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-gold">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="#home" class="text-gray-300 hover:text-gold transition-colors">Home</a>
            </li>
            <li>
              <a href="#services" class="text-gray-300 hover:text-gold transition-colors">Services</a>
            </li>
            <li>
              <a href="#plans" class="text-gray-300 hover:text-gold transition-colors">Plans</a>
            </li>
            <li>
              <a href="#contact" class="text-gray-300 hover:text-gold transition-colors">Contact</a>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-gold">Services</h3>
          <ul class="space-y-2">
            <li>
              <a href="#services" class="text-gray-300 hover:text-gold transition-colors">Free Cyber Snapshot</a>
            </li>
            <li>
              <a href="#services" class="text-gray-300 hover:text-gold transition-colors">Security Tune-Up</a>
            </li>
            <li>
              <a href="#plans" class="text-gray-300 hover:text-gold transition-colors">Monthly Support</a>
            </li>
            <li>
              <a href="#plans" class="text-gray-300 hover:text-gold transition-colors">Business Armor</a>
            </li>
            <li>
              <a href="#plans" class="text-gray-300 hover:text-gold transition-colors">EliteGuard</a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom footer -->
      <div class="border-t border-navy-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {{ currentYear }} MiniGuardTech. All rights reserved.
        </p>
        
        <div class="flex space-x-4">
          <a href="#" class="text-gray-300 hover:text-gold transition-colors">
            Privacy Policy
          </a>
          <a href="#" class="text-gray-300 hover:text-gold transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
