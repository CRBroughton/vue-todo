<template>
  <div class="fixed bottom-0 right-0 m-3 cursor-pointer">
    <svg
      v-if="CreateTodoToggle === false"
      class="w-14 h-14 bg-gray-200 rounded-full text-gray-400 outline-none focus:outline-none"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      @click.prevent="CreateTodo"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      ></path>
    </svg>
    <svg
      v-else
      class="w-14 h-14 bg-gray-200 rounded-full text-gray-400 outline-none focus:outline-none"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      @click.prevent="CreateTodo"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20 12H4"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["CreateTodoToggle"],
  setup(props__, { emit }) {
    const CreateTodoToggle = ref<boolean>(false);

    const CreateTodo = () => {
      CreateTodoToggle.value = !CreateTodoToggle.value;
      emit("CreateTodoToggle");
      return;
    };

    return {
      CreateTodo,
      CreateTodoToggle,
    };
  },
});
</script>

<style scoped></style>
