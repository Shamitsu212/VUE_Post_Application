<script setup>
  
</script>

<template>

  <div class="app">
      <router-view :key="$route.fullPath" />
  </div>
    
</template>

<style scoped>
.app{
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 100vh;

  background-color: #2C2C2C;
}
</style>
