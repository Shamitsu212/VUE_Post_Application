<script setup>

    defineOptions({
        name: "Select_UI"
    })

    const props = defineProps({

        options:{
            type: Array,
            default: [],
        },

        modelValue:{
            type: String,
            default: '',
        },

    })

    const emit = defineEmits(["update:modelValue"])

    function select(event){
        emit("update:modelValue", event.target.value)
        console.log(event.target.value)
    }

</script>

<template>

    <select @change="select" class="select">

        <option 
            v-for="option in options" 
            :key="option.id" 
            :value="option.value"
            class="select__option"
        >
            {{ option.name }}
        </option>

    </select>

</template>

<style>

.select{
    background: #2A2A2A;

    font-size: 20px;
    color: gray;

    border: none;
    border-radius: 12px;

    padding: 10px;
}

</style>