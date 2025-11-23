<script setup>

    import { ref } from 'vue';
 
    defineOptions({
        name: "Post_Form",
    })

    const title = ref('')
    const body = ref('')

    const emit = defineEmits(["add-post"])

    function submitForm() {

        const newPost = {
            id: Date.now(),
            title: title.value,
            body: body.value,
        }

        emit("add-post", newPost)

        title.value = ""
        body.value = ""
    }
</script>

<template>

    <form class="form" @submit.prevent="submitForm">
        
        <Input_UI style="width: 200px; height: 40px;"  placeholder="Введите название" v-model="title"/>

        <Input_UI style="width: 200px; height: 40px;" placeholder="Введите текст" v-model="body"/>

        <Button_UI text="Отправить"  type="submit" class="gray"/>

    </form>
    
</template>

<style scoped>

.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    width: 500px;
    height: 500px;

    border-radius: 15px;
}
.gray {
    color: gray;
}
</style>
