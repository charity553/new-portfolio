<template>
    <section class="mt-32" id="skills">
        <SectionHeader title="My Skills" />
        <div class="mt-20 flex justify-center">
            <ul class="flex flex-wrap justify-center items-center ">
                <li 
                ref="skillsRefs"
                v-for="(element,index) in skills" 
                :key="index"
                :class="`mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t ${element.bgGradient}`">
                <div class="rounded-[12px] bg-primary mt-[3px] p-12 md:p-5 text-center">
                    <h3 class="font-bold text-[35px] text-white flex items-center justify-center">
                        <Countup  v-if="visibleItems[index]" :endVal="element.percentage" :startVal="0" :duration="2"/> %
                    </h3>
                    <p class="font-normal text-[16px] " :style="{color:element.textColor}"> {{ element.title }}</p>
                </div>
            </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref , onMounted} from 'vue';
import SectionHeader from '@/components/UI/SectionHeader.vue';

const skills = ref([
    {
        percentage:98,
        title:'Figma',
        bgGradient:'to-[#acac39] from-[#1f1e1c99]',
        textColor:'#ffe600'
    },
    {
        percentage:92,
        title:'Java',
        bgGradient:'to-[#59c33789] from-[#1f1e1c99]',
        textColor:'#59c378'
    },
    {
        percentage:99,
        title:'Python(Django)',
        bgGradient:'to-[#acac39] from-[#1f1e1c99]',
        textColor:'#ffe600'
    },
    {
        percentage:72,
        title:'Vue JS',
        bgGradient:'to-[#ff9a0099] from-[#1f1e1c99]',
        textColor:'#ff9a00'
    },
    {
        percentage:43,
        title:'Wordpress',
        bgGradient:'to-[#00a9ff99] from-[#1f1e1c99]',
        textColor:'#00a9ff'
    },
    {
        percentage:40,
        title:'ReactJS',
        bgGradient:'to-[#9e00ff99] from-[#1f1e1c99]',
        textColor:'#ad00ff'
    },
    {
        percentage:98,
        title:'HTML',
        bgGradient:'to-[#acac39] from-[#1f1e1c99]',
        textColor:'#ffe600'
    },
    {
        percentage:92,
        title:'JavaScript',
        bgGradient:'to-[#59c37899] from-[#1f1e1c99]',
        textColor:'#59c378'
    },
    {
        percentage:92,
        title:'Network Mapper',
        bgGradient:'to-[#59c37899] from-[#1f1e1c99]',
        textColor:'#59c378'
    },
    {
        percentage:98,
        title:'Linux(Debian)',
        bgGradient:'to-[#9e00ff99] from-[#1f1e1c99]',
        textColor:'#ad00ff'
    },
    {
        percentage:89,
        title:'Bruteforce Attacks',
        bgGradient:'to-[#9e00ff99] from-[#1f1e1c99]',
        textColor:'#ad00ff'
    },
    {
        percentage:60,
        title:'Burpsuite',
        bgGradient:'to-[#acac39] from-[#1f1e1c99]',
        textColor:'#ffe600'
    },
    {
        percentage:40,
        title:'Acutenix',
        bgGradient:'to-[#9e00ff99] from-[#1f1e1c99]',
        textColor:'#ad00ff'
    },
    {
        percentage:79,
        title:'Injection Attacks',
        bgGradient:'to-[#acac39] from-[#1f1e1c99]',
        textColor:'#ffe600'
    },
]);

// Track visibility of items
const visibleItems = ref(skills.value.map(() => false));
const skillsRefs = ref([]);

//Intersection observer logic
onMounted (() => {
    const observer = new IntersectionObserver (
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = skillsRefs.value.indexOf(entry.target);
                    if (index !== -1) {
                        visibleItems.value[index] = true; // Mark item as visible
                    }
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the item is visible
        
    );
    // oberserv each skill items
    skillsRefs.value.forEach((el) => observer.observe(el));
});
</script>