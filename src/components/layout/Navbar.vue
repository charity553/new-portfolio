<template>
   <header>
     <div class="flex justify-between items-center p-8 lg:px-12 relative z-20">
       <div class="text-3xl font-bold dark:text-white">Charity Mulei</div>
 
       <!-- Mobile: Toggle Button + Dark Mode -->
       <div class="md:hidden z-30 flex items-center space-x-4">
         <!-- Menu Toggle -->
         <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
           <span v-if="isMenuOpen" class="text-5xl text-white dark:text-white">
             <Icon icon="material-symbols:close" />
           </span>
           <span v-else class="text-5xl text-white dark:text-white">
             <Icon icon="material-symbols:menu" />
           </span>
         </button>
 
         <!-- Dark Mode Toggle (Mobile) -->
         <button @click="toggleDarkMode">
           <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-3xl text-white" />
           <Icon v-else icon="line-md:sunny-outline" class="text-3xl text-white" />
         </button>
       </div>
 
       <!-- Navbar Link -->
       <nav :class="[
         `fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative 
         md:bg-transparent md:flex md:justify-between md:flex-row ${
           isMenuOpen ? 'block' : 'hidden'
         }`,
       ]">
         <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
           <li v-for="item in Menu" :key="item.name">
             <a
               :href="item.href"
               class="block transition ease-linear md:text-lg lg:text-xl font-bold 
               text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary"
               @click="scrollToSection(item.href)"
             >
               {{ item.name }}
             </a>
           </li>
         </ul>
 
         <!-- Dark Mode Toggle (Desktop) -->
         <button @click="toggleDarkMode" class="text-white ml-20 z-10 hidden md:block">
           <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-5xl text-primary" />
           <Icon v-else icon="line-md:sunny-outline" class="text-5xl text-secondary" />
         </button>
       </nav>
     </div>
   </header>
 </template>
 
 <script setup>
 import { ref, onMounted } from 'vue';
 
 const isMenuOpen = ref(false);
 const isDarkMode = ref(false);
 
 const Menu = ref([
   { name: 'Services', href: '#services' },
   { name: 'Skills', href: '#skills' },
   { name: 'Why Me', href: '#whyme' },
   { name: 'Projects', href: '#projects' },
   { name: 'Contact', href: '#contact' },
 ]);
 
 const scrollToSection = (href) => {
   isMenuOpen.value = false;
   const section = document.querySelector(href);
   if (section) {
     section.scrollIntoView({ behavior: 'smooth' });
   }
 };
 
 // Handle dark mode toggle and persistence
 onMounted(() => {
   const theme = localStorage.getItem('theme');
   if (theme === 'dark') {
     document.documentElement.classList.add('dark');
     isDarkMode.value = true;
   }
 });
 
 const toggleDarkMode = () => {
   const html = document.documentElement;
   if (isDarkMode.value) {
     html.classList.remove('dark');
     localStorage.setItem('theme', 'light');
   } else {
     html.classList.add('dark');
     localStorage.setItem('theme', 'dark');
   }
   isDarkMode.value = !isDarkMode.value;
 };
 </script>
 