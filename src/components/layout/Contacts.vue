<template>
    <section id="contact" class="mt-32 ">
        <SectionHeader title="Contact Me" />
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form class="space-y-8 ">
                <div v-for="(item,index) in inputs" :key="index">
                    <Input 
                    :id="item.id" 
                    :label="item.label" 
                    :type="item.type" 
                    :placeholder="item.placeholder"
                    :rows="item.rows"
                    v-model="form[item.id]"
                     />
                </div>
                <div class="flex justify-between">
                    <Button  label="Send" @click.prevent="sendEmail" />
                    <p
                        v-if="successMessage"
                        class="text-green-500 text-sm font-semibold mt-2 ml-4"
                        >
                        ✅ Message sent successfully!
                    </p>
                    <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
                        <a href="https://x.com/Charity16453250?t=88PBvKfpSmlF6okbsVOW2Q&s=09" target="_blank" class="text-gray-600 hover:text-blue-500">
                            <Icon icon="fa-brands:twitter" style="font-size:2rem" />
                        </a>
                        <a href="https://www.linkedin.com/in/charitymuleinakhchaz/" target="_blank" class="text-gray-600 hover:text-blue-700">
                            <Icon icon="fa-brands:linkedin" style="font-size:2rem" />
                        </a>
                        <a href="https://github.com/charity553" target="_blank" class="text-gray-600 hover:text-gray-800 ">
                            <Icon icon="fa-brands:github" style="font-size:2rem" />
                        </a>
                        <a href="https://www.instagram.com/charity36469/profilecard/?igsh=MTIzc2JoaTZ4Y2trcw==" target="_blank" class="text-gray-600 hover:text-pink-500 ">
                            <Icon icon="fa-brands:instagram" style="font-size:2rem" />
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';
import {ref} from 'vue';
import emailjs from '@emailjs/browser';

// My EmailJS details
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const inputs = ref([
    {
        id:'email',label:'Your email',type:'email',placeholder:'email@example.com',rows:undefined,
    },
    {
        id:'subject',label:'Subject',type:'text',placeholder:'Let us know how we can help you',rows:undefined,
    },
    {
        id:'message',label:'Message',type:'textarea',placeholder:'Leave a comment',rows:6,
    }
]);

const form = ref({
  email: '',
  subject: '',
  message: ''
});

const statusMessage = ref('');
const successMessage = ref(false);

const sendEmail = () => {
  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, form.value, PUBLIC_KEY)
    .then(() => {
        form.value = { email: '', subject: '', message: '' };
        successMessage.value = true;

        setTimeout(() => {
        successMessage.value = false;
    }, 3000);
    })
    .catch((err) => {
      statusMessage.value = '❌ Failed to send message. Please try again later.';
    });
};


</script>