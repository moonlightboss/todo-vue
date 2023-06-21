<script setup lang="ts">
</script>

<template>
  <RouterLink to="/"> Main Page</RouterLink>
  <RouterLink to="/todoList"> Task list</RouterLink>
  <router-view></router-view>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.router-links {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.router-links RouterLink {
  margin: 0 10px;
}
</style>
