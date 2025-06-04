<script setup lang="ts">
// No script needed - animations will be handled via CSS
</script>

<template>
  <section id="home" class="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-navy transition-colors">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10 dark:opacity-20">
      <div class="absolute top-20 left-10 w-40 h-40 bg-gold rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-60 h-60 bg-blue-400 rounded-full filter blur-3xl"></div>
    </div>
    
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <!-- Hero content -->
        <div class="w-full md:w-1/2 mb-12 md:mb-0">
          <h1 class="hero-animate text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy dark:text-white">
            <span class="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">Cybersecurity</span> 
            <br />Made Simple for Small Business
          </h1>
          
          <p class="hero-animate text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
            Affordable protection for your business with personalized security that's easy to understand and implement.
          </p>
          
          <div class="hero-animate flex flex-col sm:flex-row gap-4">
            <a href="#contact" class="px-6 py-3 bg-gold hover:bg-yellow-300 text-navy font-semibold rounded-md transition-colors duration-300 text-center">
              Get Your Free Cyber Snapshot
            </a>
            <a href="#services" class="px-6 py-3 bg-transparent border border-navy dark:border-white text-navy dark:text-white hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy rounded-md transition-colors duration-300 text-center">
              See Our Services
            </a>
          </div>
        </div>
        
        <!-- Hero image/visualization -->
        <div class="hero-animate w-full md:w-1/2">
          <div class="bg-navy dark:bg-navy-light p-6 rounded-lg shadow-lg text-white">
            <div class="flex items-center mb-4">
              <div class="mr-3 text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <circle cx="12" cy="10" r="1" />
                  <path d="M12 7v2" />
                  <path d="M12 13v2" />
                  <path d="M9 10h2" />
                  <path d="M13 10h2" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold">
                  <span class="text-white">MiniGuard</span><span class="text-gold">Tech</span>
                </h2>
                <p class="text-xs text-gray-300">Big Protection. Always Got Your Back.</p>
              </div>
            </div>
            
            <!-- Service options -->
            <div class="border border-gold rounded-md p-4 mb-4">
              <h3 class="text-xl font-semibold mb-2">ONE-TIME SERVICE</h3>
              <p class="text-gold text-lg font-semibold">Starting at $297+</p>
            </div>
            
            <div class="border border-gold rounded-md p-4 mb-4">
              <h3 class="text-xl font-semibold mb-2">QUARTERLY CHECKUPS</h3>
              <p class="text-gold text-lg font-semibold">Starting at $149/qtr</p>
            </div>
            
            <div class="border border-gold rounded-md p-4 mb-4">
              <h3 class="text-xl font-semibold mb-2">MONTHLY SUPPORT</h3>
              <p class="text-gold text-lg font-semibold">Starting at $99/mo</p>
            </div>
            
            <!-- Services list -->
            <ul class="mt-6 space-y-2 text-sm">
              <li class="flex items-center">
                <span class="text-gold mr-2">✓</span> Password & Wi-Fi Setup
              </li>
              <li class="flex items-center">
                <span class="text-gold mr-2">✓</span> Network Security
              </li>
              <li class="flex items-center">
                <span class="text-gold mr-2">✓</span> Data Backup
              </li>
              <li class="flex items-center">
                <span class="text-gold mr-2">✓</span> Antivirus Protection
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
