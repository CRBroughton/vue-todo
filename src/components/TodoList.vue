<template>
  <div class="text-center h-screen pt-1">
    <ul v-for="todo in todos" :key="todo.id" class="p-1">
      <li
        @click="setTodoToComplete(todo.id)"
        class="my-1 p-4 rounded-lg bg-gray-100 items-center flex break-all"
        :class="todo.isCompleted && lineThrough"
      >
        {{ todo.contents }}
        <div class="absolute right-0 mr-6" @click="DeleteTodoFromList(todo.id)">
          <svg
            class="w-6 h-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onMounted, ref } from "@vue/runtime-core";
import {
  todos,
  DeleteTodoFromList,
  setTodoToComplete,
  getTodos,
} from "@/functions/Todo";

export default defineComponent({
  emits: ["todos"],
  setup() {
    onMounted(() => {
      getTodos();
    });

    const lineThrough = ref<string>("line-through");

    return {
      lineThrough,
      todos,
      getTodos,
      DeleteTodoFromList,
      setTodoToComplete,
    };
  },
});
</script>

<style scoped>
</style>