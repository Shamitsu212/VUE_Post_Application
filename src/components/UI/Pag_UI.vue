<script setup>

    defineOptions({
        name: "Pag_UI"
    })


    const props = defineProps({

        modelValue: {
            type: Number,
            default: "1",
            required: true,
        },

        totalPages: {
            type: Number,
            default: "1",
            required: true,
        },

    })

    const emit = defineEmits(["update:modelValue"])

    function prevPage() {
        emit("update:modelValue", props.modelValue - 1)
    }

    function nextPage() {
        emit("update:modelValue", props.modelValue + 1)
    }


</script>

<template>
  
  <div class="columnContainer">

        <span class="columnContainer__text">
            Страница {{ modelValue }} из {{ totalPages }}
        </span>

        <div class="columnContainer__rowContainer">
            
            <Button_UI text="<" @click = "prevPage" :disabled="modelValue == 1" class="rowContainer__button" style="color: gray;"/>
            <Button_UI text=">" @click = "nextPage" :disabled="modelValue == totalPages" class="rowContainer__button" style="color: gray;"/>

        </div>

  </div>

    
</template>

<style scoped>

    .columnContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .columnContainer__text{
        font-size: 20px;
        color: white;
    }
    .columnContainer__rowContainer{
        display: flex;
        flex-direction: row;
        gap: 35px;
    }
    .rowContainer__button{
        width: 40px;
        height: 40px;
    }

</style>
