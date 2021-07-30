<template>
  <div v-for="todo in todos" :key="todo.id" class="bg-gray-100 text-center">
    <h1>{{ todo.contents }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import Todo from "@/types/Todo";
import db from "@/localbase";

export default defineComponent({
  setup() {
    onMounted(() => {
      getTodos();
    });

    const todos = ref<Todo[]>([]);
    const getTodos = async () => {
      todos.value = await db.collection("todo").get();
    };

    return {
      todos,
      getTodos,
    };
  },
});
</script>

<style scoped>
</style>