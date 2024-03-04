import { TODO_FILTERS } from "../constants";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByTodoFilter = (store, todoFilter) => {
  const allTodos = getTodos(store);
  switch (todoFilter) {
    case TODO_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case TODO_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case TODO_FILTERS.ALL:
    default:
      return allTodos;
  }
};