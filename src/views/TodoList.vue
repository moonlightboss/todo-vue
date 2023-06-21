<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";

interface Todo {
  content: string;
  done: boolean;
  createdAt: number;
}

const todos = ref<Todo[]>([]);
const name = ref<string>("");
const input_content = ref<string>("");

const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return b.createdAt - a.createdAt;
  })
);

const addTodo = () => {
  if (input_content.value.trim() === "") {
    return;
  }
  todos.value.push({
    content: input_content.value,
    done: false,
    createdAt: new Date().getTime(),
  });

  input_content.value = "";
};
const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  { deep: true }
);

watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});
</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        It's your task list, <input type="text" placeholder="You can type name here" v-model="name" />
      </h2>
    </section>
    <section class="create-todo">
      <h3>Create a task</h3>
      <form id="new-todo-form" @submit.prevent="addTodo">
        <input
          type="text"
          placeholder="Type task text here"
          v-model="input_content"
        />
        <input type="submit" value="Add Task" />
      </form>
    </section>
    <section class="todo-list">
      <h3>TASK LIST</h3>
      <div class="list" id="todo-list">
        <div
          v-for="todo in todos_asc"
          :class="`todo-item ${todo.done && 'done'}`"
        >
        <input type="checkbox" v-model="todo.done" />
          <div class="todo-content">
            <input type="text" v-model="todo.content" />
          </div>

          <div class="actions">
            <button class="delete" @click="removeTodo(todo)">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
