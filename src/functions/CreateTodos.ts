import { ref } from "vue";
import db from "@/localbase";
import Todo from "@/types/Todo";

const todos = ref<Todo[]>([]);

const AddTodoToList = function (input: string) {
    const event = new Date();

    const newTodo = <Todo>{
      id: 1,
      contents: input,
      dateAdded: 1,
      isCompleted: false,
    };

    db.collection("todo").add(newTodo);
    todos.value.push(newTodo);
    return;
  };

export { todos, AddTodoToList };