import React from "react";
import TodoList from "./component/TodoList";
import AddTodo from "./component/AddTodo";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <AddTodo />
      <div className="todo-container">
        <TodoList />
      </div>
    </div>
  );
}
