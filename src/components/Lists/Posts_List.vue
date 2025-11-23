<script setup>

    import Post_Item from '../MappedItems/Post_Item.vue';
    import { useRouter } from 'vue-router'

    defineOptions({
        name: "Post_List"
    })

    const props = defineProps({

      posts:{
        type: Array,
        default: () => [],
      }

    })

    // Динамический роутинг

    import { useNav } from '../../compossables/useNav'

    const { goToPost } = useNav()


</script>

<template>
  
  <transition-group name="group" tag="div" class="list">
    
      <Post_Item 
          v-for="post in posts"
          :key="post.id"
          :post="post"
          :onClick= "() => goToPost(post.id)"
          @delete-post="$emit('delete-post', post.id)"
      />

  </transition-group>

</template>

<style>

.list{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    
    width: 722px;
}
.group-enter-active, .group-leave-active {
  transition: all 0.5s ease;
}
.group-enter-from, .group-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.group-move {
  transition: transform 0.5s ease;
}

</style>
