<template>
  <div class="text-center h-screen pt-1">
    <ul v-for="todo in todos" :key="todo.id" class="p-1">
      <li
        class="my-1 p-4 rounded-xl bg-gray-300"
        @click="DeleteTodoFromList(todo.id)"
      >
        {{ todo.contents }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onMounted } from "@vue/runtime-core";
import db from "@/localbase";
import { todos, DeleteTodoFromList } from "@/functions/CreateTodos";

export default defineComponent({
  emits: ["todos"],
  setup() {
    onMounted(() => {
      getTodos();
    });

    const getTodos = async () => {
      todos.value = await db.collection("todo").get();
    };

    return {
      todos,
      getTodos,
      DeleteTodoFromList,
    };
  },
});
</script>

<style scoped>
</style>