<template>
    <div class="relative z-10">
        <label 
        :for="id"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
        {{ label }}
    </label>
    <component
    :is="type === 'textarea' ? 'textarea':'input'"
    :id="id"
    :rows="type === 'textarea' ? rows : undefined"
    :placeholder="placeholder"
    :value="modelValue"
    @input="event => emit('update:modelValue', event.target.value)"
    class="shadow-sm text-sm rounded-lg block w-full p-2.5
focus:ring-primary-500 focus:border-primary-500 border border-secondary
bg-primary dark:bg-[#ffffff29] text-white dark:text-white placeholder-gray-300"

/>

    </div>
</template>

<script setup>
defineProps({
    modelValue: [String, Number],
    id:{type:String, required:true},
    label:{type:String, required:true},
    type:{type:String, default:'text'},
    placeholder:{type:String, default:''},
    rows:{type:Number, default:4}, // Used only for textarea
})
const emit = defineEmits(['update:modelValue']);
</script>