<script setup lang="ts">
import MyComponent from '~/MyComponent.vue'
import '~/main.css'
</script>

<template>
  <div class="theme">
    <MyComponent/>
  </div>
</template>

<style scoped>
.theme {
  background-color: white;
  color: black;
}

@media (prefers-color-scheme: dark) {
  .theme {
    background-color: black;
    color: white;
  }
}
</style>