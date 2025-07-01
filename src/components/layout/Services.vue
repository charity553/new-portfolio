<template>
    <section id="services" class="relative text-white mt-32">
        <SectionHeader title="My Services"/>
            <div class="mt-20 py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2
                    md:gap-10 md:pt-12 lg:grid-cols-3">
                <article class="px-[12px] mb-[24px]" v-for="element in services" :key="element.id"> 
                    <div class="mt-[30px] relative flex flex-col justify-center text-center rounded-[30px]  border
                            border-secondary dark:bg-[#ffffff29] bg-primary" 
                            data-aos="fade-up"
                            :data-aos-delay="element.id *100">
                        <div class="mt-[-30px] flex justify-center relative">
                            <div class="mt-[-7px] p-[20px] relative bg-primary rounded-[50%]">
                                <span class="h-[60px] w-[60px] m-auto border-[1px] border-solid border-secondary absolute 
                                top-[8px] left-[8px] rounded-[50%] inline-block z-[5]"></span>
                                <img :src="element.icon" alt="services" class="h-[35px] w-[35px] relative z-[1]"/>
                            </div>
                        </div>
                        <div class="p-[30px] ">
                            <h3 class="uppercase font-semibold text-secondary text-base"> {{ element.name }}</h3>
                            <p class="text-[14px] leading-[20px] text-white trackaing-[0.03rem] ">{{ element.description }}</p>
                        </div>
                    </div>
                </article>
            </div>

    </section>
</template>

<script setup>
import {ref} from 'vue';
import SectionHeader from '@/components/UI/SectionHeader.vue';

const services = ref([
    {
        id: 1,
        icon:'https://img.icons8.com/ios-filled/100/daed1a/google-code.png',
        name: 'Web Development',
        description:' I create responsive and user-friendly websites using the latest technologies. My focus is on delivering high-quality code and seamless user experiences.',
    },
    {
        id: 2,
        icon:'https://img.icons8.com/ios-filled/100/daed1a/cyber-security.png',
        name: 'Cyber Security',
        description:'I specialize in identifying vulnerabilities and securing systems against cyber threats. My goal is to protect sensitive data and ensure the integrity of digital assets.',
    },
    {
        id: 3,
        icon:'https://img.icons8.com/ios-filled/100/daed1a/technical-support.png',
        name: 'Technical Support',
        description:'I provide technical support to help users resolve issues with their devices and software. My focus is on delivering prompt and effective solutions to enhance user satisfaction.',
    },
    {
        id: 4,
        icon:'https://img.icons8.com/ios-filled/100/daed1a/technical-support.png',
        name: 'Graphic Design',
        description:'I create visually appealing designs for various media, including websites, social media, and print. My focus is on delivering creative solutions that effectively communicate messages.',
    },
    {
        id: 5,
        icon:'https://img.icons8.com/ios-filled/100/daed1a/cloud-computing.png',
        name: 'Mobile App Development',
        description:'I develop mobile applications for both iOS and Android platforms. My focus is on creating intuitive and user-friendly apps that meet the needs of users.',
    },
    {
        id: 6,
        icon:'https://img.icons8.com/ios-filled/100/daed1a/cloud-computing.png',
        name: 'Cloud Computing',
        description:'I provide cloud computing solutions to help businesses scale their operations and improve efficiency. My focus is on delivering secure and reliable cloud services.',
    },
])

</script>