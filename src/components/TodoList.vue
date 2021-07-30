<template>
  <div v-for="todo in todos" :key="todo.id" class="bg-gray-100 text-center">
    <h1>{{ todo.contents }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onMounted } from "@vue/runtime-core";
import db from "@/localbase";
import { todos } from "@/functions/CreateTodos";

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
    };
  },
});
</script>

<style scoped>
</style>