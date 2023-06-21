<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const name = ref<string>("");






watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
});
</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        Hello! <input type="text" placeholder="You can type name here" v-model="name" />
      </h2>
    </section>
  </main>
</template>
