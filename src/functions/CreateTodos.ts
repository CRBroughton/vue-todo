import { ref } from "vue";
import db from "@/localbase";
import Todo from "@/types/Todo";

const todos = ref<Todo[]>([]);

const AddTodoToList = function (input: string) {
    const newTodo = <Todo>{
      id: Date.now(),
      contents: input,
      dateAdded: 1,
      isCompleted: false,
    };

    db.collection("todo").add(newTodo);
    todos.value.push(newTodo);
    return;
  };

const DeleteTodoFromList = function (input:number) {
  console.log(input)
  db.collection("todo").doc({ id:input }).delete();

  const tempTodo = todos.value.filter(todo => todo.id !== input);
  todos.value = tempTodo;
  return;
}

export { todos, AddTodoToList, DeleteTodoFromList };