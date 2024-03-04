import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

import './App.scss';


function App() {
  return (
    <div className="app">
      <h1>ToDo List</h1>
      <AddTodo />
      <TodoFilters />
      <TodoList />
    </div>
  );
}

export default App;
