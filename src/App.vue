<template>
  <div class="font-semibold top-0 fixed bg-gray-200 flex w-full p-4 text-lg">
    Your tasks
  </div>
  <div class="bg-gray-200">
    <TodoList />
    <CreateTodo
      class="w-full bottom-0 sticky"
      @CreateTodo="AddTodoToList"
      v-if="!CreateTodoToggle"
    />
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
* {
  font-family: "Inter";
}
</style>
