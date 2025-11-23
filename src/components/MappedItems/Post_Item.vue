<script setup>

    defineOptions({
        name: "Post_Item"
    })

    const props = defineProps({

      post:{
        type: Object,
        required: true,
      },
      onClick: {
        type: Function,
      },

    })

    const emit = defineEmits(["delete-post"])

    function deletePost() {
      emit("delete-post", props.post.id)
    }

</script>

<template>
  
  <div class="item">
    <div class="item__textContainer">
      <h3 class="textContainer__H">
        {{ post.title }}
      </h3>
      <p class="textContainer__text">
        {{ post.body }}
      </p>
    </div>

      <div class="item__buttonContainer">
        <Button_UI text="Удалить" :onClick="deletePost"  style="width: 112px; height: 48px;" class="gray"/>
        <Button_UI text="Перейти"  :onClick="onClick" style="width: 112px; height: 48px;" class="gray"/>
      </div>
  </div>

</template>

<style>

.item{
  display: flex;
  flex-direction: row;
  gap: 20px;

  padding: 10px;
  overflow: hidden;

  border: 1px solid black;
  
  background: #111111;

  width: 600px;
  height: 120px;

  color: white;
  text-overflow: ellipsis;
  font-size: 15px;
}
.item__buttonContainer{
  display: flex;
  flex-direction: column;
  gap: 15px; 
}
.item__textContainer{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.gray {
  color: gray;
}

</style>
