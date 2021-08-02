<template>
  <div class="bg-yellow-300 flex flex-row items-center">
    <input
      class="p-3 w-full outline-none focus:outline-none rounded-r-lg"
      type="text"
      placeholder="Type to enter a task"
      v-model="input"
    />
    <div @click.prevent="submitTodo">
      <svg
        class="w-12 h-12 text-gray-700"
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