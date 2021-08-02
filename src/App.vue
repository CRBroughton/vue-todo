<template>
  <div class="bg-gray-600">
    <CreateTodo
      class="w-full bottom-0 fixed"
      @CreateTodo="AddTodoToList"
      v-if="!CreateTodoToggle"
    />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CreateTodo from "@/components/CreateTodo.vue";
import TodoList from "@/components/TodoList.vue";
import { AddTodoToList } from "@/functions/Todo";

export default defineComponent({
  name: "App",
  components: {
    CreateTodo,
    TodoList,
  },
  setup() {
    const CreateTodoToggle = ref<boolean>(false);

    const ShowCreateTodo = () => {
      CreateTodoToggle.value = !CreateTodoToggle.value;
    };

    return { CreateTodoToggle, ShowCreateTodo, AddTodoToList };
  },
});
</script>

<style>
</style>
