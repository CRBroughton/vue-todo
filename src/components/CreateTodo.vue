<template>
  <section class="w-full absolute bottom-0 mb-24 flex">
    <input
      class="text-center m-auto p-4 rounded bg-gray-700 text-gray-100"
      type="text"
      name="CreateTodo"
      id=""
      placeholder="Create your Todos Here!"
      v-model="input"
    />
    <div @click.prevent="submitTodo" class="bg-gray-800">
      <svg
        class="w-6 h-6"
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
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ['CreateTodo'],
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