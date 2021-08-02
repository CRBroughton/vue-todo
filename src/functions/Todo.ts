import { ref } from "vue";
import db from "@/localbase";
import Todo from "@/types/Todo";

db.config.debug = true;

// Stores todos in an array of objects
const todos = ref<Todo[]>([]);

// Asyncronously get all of the todos from the database
const getTodos = async () => {
  todos.value = await db.collection("todo").get();
};

// Accepts an input string with is the contents of the todo
// and creates a new Todo object in the database and pushes it onto
// the todos list
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

// Accepts an input as a number which corresponds to the todo id
// that todo is then deleted from the database and removed from the list
// using a filter function
const DeleteTodoFromList = async function (input: number) {
  try {
    await db.collection("todo").doc({ id: input }).delete();
    todos.value = todos.value.filter((todo) => todo.id !== input);
    return;
  } catch (err) {
    console.error("error", err);
  }
};

// Accepts an input as a number which corresponds to the todo id
// that todo is then collected from the database and updated with the new
// boolean value
// Once the database is updated, the selected todo is then filtered from
// the todo list and updated with its new boolean value
const setTodoToComplete = async function (input: number) {
  try {
    await db
      .collection("todo")
      .doc({ id: input })
      .get()
      .then((todo: { isCompleted: boolean }) => {
        const todoCompletedValue = todo.isCompleted;
        db.collection("todo").doc({ id: input }).update({
          isCompleted: !todoCompletedValue,
        });
      });
    const currentTodo = todos.value.filter((todo) => todo.id === input);
    currentTodo[0].isCompleted = !currentTodo[0].isCompleted;
    return;
  } catch (err) {
    console.error("error", err);
  }
};

export {
  todos,
  getTodos,
  AddTodoToList,
  DeleteTodoFromList,
  setTodoToComplete,
};
