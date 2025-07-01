<template>
    <section class="p-16">
        <header class="text-center">
            <h3 class="text-4xl font-bold text-primary dark:text-white ">Education</h3>
        </header>
        <ul class="mt-10 space-y-8">
            <li class="w-full rounded-xl shadow-lg border bg-gradient-to-t  to-[#acac39]
            from-[#1f1e1c99]"
            v-for="(item,index) in Education" :key="index">
            <article class="flex flex-col lg:flex-row items-center lg:items-start rounded-[12px] bg-primary 
            mt-[3px] mx-[3px] p-6 md:p-8 lg:p-10">
            <figure class="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0">
                <Icon  icon="hugeicons:university" class="text-4xl md:text-6xl lg:text-7xl text-secondary"/>
            </figure>
            <section class="w-full lg:w-3/4 lg:pl-4 text-center lg:text-left">
                <header>
                    <h3 class="text-xl md:text-2xl font-semibold uppercase text-secondary">{{ item.School }}</h3>
                </header>
                <p class="text-sm md:text-base text-white">{{ item.degree }}</p>
                <p class="text-sm md:text-base text-white">{{ item.duration }}</p>
            </section>
        </article>
        </li>
        </ul>

    </section>
</template>

<script setup>
import {ref} from 'vue';

const Education =ref([
    {
        duration:'5/2025-8/2025',
        School:'Cybershujaa',
        degree:'Security Analyst'
    },
    {   duration:'3/2025-6/2025', 
        School:'Jomo Kenyatta University of Agriculture and Technology',
        degree:'Cyber Security',
    },
    {   duration:'8/2018-12/2022', 
        School:'Masinde Muliro University of Science and Technology',
        degree:'Bachelor of Science in Computer Science',
    },
    {   duration:'2/2014-12/2017', 
        School:'Mayori Secondary',
        degree:'High School Certificate',
    }
        

])
</script>