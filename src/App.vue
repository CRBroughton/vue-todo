<template>
  <CreateTodo @CreateTodo="AddTodoToList" v-if="CreateTodoToggle" />
  <SideMenu @CreateTodoToggle="ShowCreateTodo" />
  <TodoList />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SideMenu from "@/components/SideMenu.vue";
import CreateTodo from "@/components/CreateTodo.vue";
import TodoList from "@/components/TodoList.vue";
import { AddTodoToList } from "@/functions/CreateTodos";


export default defineComponent({
  name: "App",
  components: {
    SideMenu,
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
