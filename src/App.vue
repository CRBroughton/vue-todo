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
import db from "@/localbase";
import Todo from "@/types/Todo";

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

    const AddTodoToList = function (input: string) {
      const event = new Date();

      const newTodo = <Todo>{
        id: 1,
        contents: input,
        dateAdded: 1,
        isCompleted: false,
      };

      db.collection("todo").add(newTodo);
      return;
    };

    return { CreateTodoToggle, ShowCreateTodo, AddTodoToList };
  },
});
</script>

<style>
</style>
