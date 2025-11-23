<script setup>

    defineOptions({
        name: "Button_UI"
    })

    const props = defineProps({

      text: {
        type: String,
        default: "Кнопка",
      },

      onClick: {
        type: Function,
        default: null
      },

    });

</script>

<template>

  <button 
    class="button"
    @click="props.onClick && props.onClick()"
    v-bind="$attrs"
  >
    {{ props.text }}
  </button>

</template>

<style scoped>

    .button{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      font-size: 20px;
      font-weight: bold;
      

      background: #2A2A2A;

      outline: none;
      border: none;
      border-radius: 12px;

      padding: 12px 12px;

      transition: all 0.4s ease;
    }
    .button:hover{
      color: white;
      cursor: pointer;
    }

</style>
