<script setup>

    import { useRoute } from 'vue-router'
    import { ref, onMounted } from 'vue'
    import axios from 'axios'
    

    const route = useRoute()
    const postId = Number(route.params.id)
    
    defineOptions({
        name: 'Post_Page'
    })

    const loading = ref(true)
    const post = ref(null)

    async function findPost() {
        loading.value = true

        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        
        post.value = data.data

        loading.value = false
    }

    onMounted(findPost)

    //роутинг

    import { useNav } from '../../compossables/useNav'

    const { goBack } = useNav()

</script>

<template>

    <section class="postPage">

        <div v-if="post">
            <h1 class="postPage__text">
                {{ post.title }}
            </h1>
            <p class="postPage__text">
                {{ post.body }}
            </p>
        </div>

        <div v-else>
            Пост не найден
        </div>

        <Button_UI text="Назад" :onClick="goBack" style="width: 200px; height: 48px;" class="gray"/>
    </section>

</template>

<style scoped>

.postPage{
    display: flex;
    flex-direction: column;
    gap: 40px;

    padding: 12px 12px;

    background: #212121;

    width: 60vw;
    min-height: 1160px;
}
.postPage__text{
    color: white;
}
.gray {
    color: gray;
}
</style>