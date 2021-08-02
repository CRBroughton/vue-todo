import { ref } from "vue";
import db from "@/localbase";
import Todo from "@/types/Todo";

const todos = ref<Todo[]>([]);

const getTodos = async () => {
  todos.value = await db.collection("todo").get();
};

const AddTodoToList = function (input: string) {
    const newTodo = <Todo>{
      id: Date.now(),
      contents: input,
      isCompleted: false,
    };

    db.collection("todo").add(newTodo);
    todos.value.push(newTodo);
    return;
  };

const DeleteTodoFromList = function (input:number) {
  db.collection("todo").doc({ id:input }).delete();

  todos.value = todos.value.filter(todo => todo.id !== input);
  return;
}

const setTodoToComplete = function (input:number) {
  db.collection("todo").doc({ id:input }).get().then((todo: { isCompleted: boolean; }) => {
    const todoCompletedValue = todo.isCompleted;
    db.collection("todo").doc({ id:input }).update({
    isCompleted: !todoCompletedValue
    })
  })
  const currentTodo = todos.value.filter(todo => todo.id === input);
  currentTodo[0].isCompleted = !currentTodo[0].isCompleted;
  return;
}

export { todos, getTodos, AddTodoToList, DeleteTodoFromList, setTodoToComplete };