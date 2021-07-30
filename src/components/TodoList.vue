<template>
  <div v-for="todo in todos" :key="todo.id">
    <h1>{{ todo.contents }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Todo from "@/types/Todo";

export default defineComponent({
  setup() {
    const todos = ref<Todo[]>([]);
    return {
      todos,
    };
  },
});
</script>

<style scoped>
</style>