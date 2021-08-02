import { mount } from "@vue/test-utils";
import CreateTodo from "@/components/CreateTodo.vue";

import { saveToStorage, deleteFromStorage, fakeLocalStorage } from "./storage";

test("creates a todo", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: fakeLocalStorage,
    });
  });

  const wrapper = mount(CreateTodo);
  const newTodo = "New Todo";

  wrapper.get('[todo-test="new-todo"]').setValue(newTodo);
  wrapper.get('[todo-test="form"]').trigger("submit");
  saveToStorage(newTodo);

  expect(window.localStorage.getItem("the-key")).toEqual(newTodo);
  console.log(window.localStorage.getItem("the-key"))
});

test("deletes a todo", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: fakeLocalStorage,
    });
  });

  deleteFromStorage("New Todo");

  expect(window.localStorage.getItem("the-key")).toEqual(null);
  console.log(window.localStorage.getItem("the-key"));
});
