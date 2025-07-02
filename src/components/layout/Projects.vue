<template>
    <section id="projects" class="relative w-11/12 px-16  mx-auto">
        <SectionHeader title="My Projects" />

        <!--Custom Navigation Buttons-->
        <button class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white
        dark:bg-secondary bg-primary p-4 rounded-full">
        <Icon icon="line-md:arrow-left" class="font-bold text-3xl"/>
    </button>

    <button class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white
        dark:bg-secondary bg-primary p-4 rounded-full">
        <Icon icon="line-md:arrow-right" class="font-bold text-3xl"/>
    </button>

    <!-- Swiper components-->
    <swiper
    :effect="'coverflow'"
    grabCursor
    centeredSlides
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :navigation="navigationOptions"
    loop
    pagination
    :modules="[EffectCoverflow, Navigation]"
    class="max-w-full mt-32"
    >
    <swiper-slide class="max-w-[300px]" v-for="(project,index) in projects" :key="index">
        <ProjectCard 
        :title="project.title"
        :description="project.description"
        :image="'src/assets/images/'+project.image"
        :tags="project.tags"
        :liveLink="project.liveLink"
        :codeLink="project.codeLink"/>
    </swiper-slide>
</swiper>
    </section>
</template>

<script setup>
import {ref} from 'vue';
import SectionHeader from '@/components/UI/SectionHeader.vue';
import ProjectCard from '@/components/UI/ProjectCard.vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation } from 'swiper/modules';

//Define navigation options
const navigationOptions = {
    prevEl:'.swiper-prev',
    nextEl:'.swiper-next',
};

const projects = ref([
    {
        title:'KenyaEMR System Enhancements',
        description:'Improved the user interface and added new functionality to the KenyaEMR system during hackathons and field deployments across Kenya in Bungoma, Kakamega, Turkana, West Pokot, Uasin Gishu, Trans Nzoia Counties',
        image:'/Kenyaemr.png',
        tags:['React', 'Java', 'Health IT', 'EMR', 'UX/UI','OpenMRS'],
        liveLink:'/https://github.com/openmrs/openmrs-esm-patient-chart/pull/2189',
        codeLink:'/https://github.com/openmrs/openmrs-esm-patient-chart/pull/2189'
    },
    {
        title:'Data Reporting Platform with Offline Support',
        description:'Contributed to the development and support of responsive, mobile-friendly web apps for field data reporting with offline-first capabilities (eCHIS and CPIMS).',
        image:'/echis.png',
        tags:['PWA', 'Vue.js', 'IndexedDB', 'Offline-First', 'Health'],
        liveLink:'/',
        codeLink:'/'
    },
    {
        title:'DWAPI Facility Integration & Automation',
        description:'Supported over 5 counties with data extraction and automation tools for Care & Treatment and HIV testing data using DWAPI. Created shell scripts to streamline processes.',
        image:'/DWAPI.png',
        tags:['Shell Scripting', 'DWAPI', 'Data Extraction', 'Linux', 'Health Systems'],
        liveLink:'/',
        codeLink:'/'
    },
    {
        title:'Personal Developer Portfolio',
        description:'Built a responsive and animated portfolio site to showcase my skills, projects, and resume using Vue.js and TailwindCSS.',
        image:'/HeroPic.jpg',
        tags:['Vue.js', 'Tailwind CSS', 'Responsive Design'],
        liveLink:'/',
        codeLink:'/'
    },
    {
        title:'Security Analyst Lab Projects',
        description:' Participated in Capture The Flag challenges and labs as part of CyberShujaa security analyst training. Tasks included privilege escalation, enumeration, and forensic analysis.',
        image:'/nmap.png',
        tags:['Cybersecurity', 'Linux', 'CTF', 'Penetration Testing'],
        liveLink:'/',
        codeLink:'/'
    },
    {
        title:'Community Health Toolkit (CHT) Local Deployment',
        description:'Installed and configured a local CHT instance, worked with ODK sheets, wrote test cases using Mocha/Chai, and created automation for Nakuru County users.',
        image:'/HeroPic.jpg',
        tags:['CHT', 'Mocha', 'Node.js', 'Testing', 'Community Health'],
        liveLink:'/',
        codeLink:'/'
    },
    {
        title:'DDoS Attack Simulation Toolkit',
        description:'Developed a simulation environment to analyze and demonstrate Distributed Denial of Service (DDoS) attack patterns. Included scripted traffic generation, logging, and impact analysis for learning and awareness purposes.',
        image:'/DDOS.png',
        tags:['Cybersecurity', 'Python', 'Bash', 'DDoS', 'Network Simulation', 'Linux'],
        liveLink:'/https://ddos-landing.onrender.com/team.html',
        codeLink:'/'
    }
])
</script>

<style>
.swiper-button-prev,
.swiper-button-next {
    cursor:pointer;
}
.swiper-slide {
    display:flex;
    justify-content:center;
    align-items:center;
}
</style>