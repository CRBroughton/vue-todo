<template>
  <form todo-test="form">
    <div class="p-6 flex flex-row items-center">
      <input
        class="
          p-3
          mr-2
          rounded-full
          w-full
          outline-none
          focus:outline-none
          rounded-lg
          text-center
          shadow-lg
        "
        type="text"
        placeholder="Type to enter a task"
        v-model="input"
        todo-test="new-todo"
      />
      <div
        @click.prevent="submitTodo"
        class="w-20 h-16 bg-white flex items-center rounded-full shadow-lg"
      >
        <svg
          class="w-8 h-8 text-gray-500 m-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props__, { emit }) {
    const input = ref<string>("");

    const submitTodo = function () {
      if (input.value === "") {
        alert("Please enter a object name!");
        return;
      }
      emit("CreateTodo", input.value);
    };

    return { input, submitTodo };
  },
});
</script>

<style scoped>
</style>