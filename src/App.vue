<template>
    <div class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
        <Suspense>

            <template #default>
                <div>
                <Navbar />
                <HeroSection />
                <Counter />
                <Services />
                <Skills />
                <WhyMe />
                <Projects />
                <Contacts />
                <Footer />
                <BackToTop />
            </div>
            </template>

            <template #fallback>
                <div class="flex justify-center items-center min-h-screen ">
                    <LoadingSpinner />
                </div>
            </template>
        </Suspense>
       
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const Navbar = defineAsyncComponent(() => import('@/components/layout/Navbar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/layout/HeroSection.vue'));
const Counter = defineAsyncComponent(() => import('@/components/layout/Counter.vue'));
const Services = defineAsyncComponent(() => import('@/components/layout/Services.vue'));
const Skills = defineAsyncComponent(() => import('@/components/layout/Skills.vue'));
const WhyMe = defineAsyncComponent(() => import('@/components/layout/Whyme.vue'));
const Projects = defineAsyncComponent(() => import('@/components/layout/Projects.vue'));
const Contacts = defineAsyncComponent(() => import('@/components/layout/Contacts.vue'));
const Footer = defineAsyncComponent(() => import('@/components/layout/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/layout/BackToTop.vue'));

import LoadingSpinner from '@/components/layout/LoadingSpinner.vue';
</script>

<style>
*{
    scrollbar-width: thin;
    scrollbar-color: #111827 #f1f1f1;
}
</style>