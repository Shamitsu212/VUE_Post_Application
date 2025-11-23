<script setup>

    defineOptions({
        name: "Input_UI"
    })

    const props = defineProps({

        modelValue: {
            type: String,
            default: "",
        },

        placeholder: {
            type: String,
            default: "Поле ввода",
        },

    })

   const emit = defineEmits(["update:modelValue"])

   function onInput(event){
    emit("update:modelValue", event.target.value)
   }

</script>

<template>
  
    <input
        :placeholder="placeholder"
        :value="modelValue"

        @input="onInput"

        class="input"
    />
    
</template>

<style scoped>

    .input{
        padding: 10px 20px;

        border: 1px solid #2A2A2A;
        border-radius: 24px;

        font-size: 20px;
        font-weight: bold;
        color: gray;

        background: #2A2A2A;

        outline: none;
    }

    .input:focus{
        border: 1px solid white;
    }

</style>
