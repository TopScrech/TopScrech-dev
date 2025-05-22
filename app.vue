<script setup lang="ts">
import '~/main.css'
</script>

<template>
  <div class="theme">
    <NuxtPage/>
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