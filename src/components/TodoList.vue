<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Todo from "@/types/Todo";

export default defineComponent({
  setup() {
    const todo = ref<Todo[]>([]);
    return {
      todo,
    };
  },
});
</script>

<style scoped>
</style>