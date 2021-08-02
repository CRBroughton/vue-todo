<template>
  <div class="mt-12 p-4 text-center h-screen overflow-y-auto">
    <ul v-for="todo in todos" :key="todo.id" class="p-1 flex items-center" todo-test="todo">
      <li
        @click.prevent="setTodoToComplete(todo.id)"
        class="
          my-1
          p-4
          w-full
          rounded-lg
          bg-gray-100
          items-center
          flex
          break-all
          shadow-lg
          transition
          duration-200
          ease-in-out
        "
        :class="todo.isCompleted && lineThrough"
      >
        {{ todo.contents }}
      </li>
      <div
        class="
          bg-red-200
          right-0
          ml-2
          w-14
          h-14
          rounded-lg
          flex
          items-center
          shadow-lg
        "
        @click.prevent="DeleteTodoFromList(todo.id)"
      >
        <svg
          class="w-8 h-8 text-gray-600 m-auto"
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

    const lineThrough = ref<string>("line-through bg-gray-300");

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
.shortFade-enter-from {
  opacity: 0;
}
.shortFade-enter-to {
  opacity: 1;
}
.shortFade-enter-active,
.shortFade-leave-active {
  transition: all 0.2s ease;
}

.shortFade-leave-from {
  opacity: 1;
}
.shortFade-leave-to {
  opacity: 0;
}
</style>