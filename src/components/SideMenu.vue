<template>
  <CreateTodo v-if="CreateTodoToggle" />
  <div class="absolute bottom-0 right-0 m-3 cursor-pointer">
    <svg
      class="w-14 h-14 bg-gray-200 rounded-full text-gray-400"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CreateTodo from "@/components/CreateTodo.vue";
import db from "@/localbase";

export default defineComponent({
  components: {
    CreateTodo,
  },
  setup() {
    const CreateTodoToggle = ref<boolean>(false);
    const CreateTodo = () => {
      CreateTodoToggle.value = !CreateTodoToggle.value;
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
