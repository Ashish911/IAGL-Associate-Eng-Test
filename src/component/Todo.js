import React from "react";
import { connect } from "react-redux";

const Todo = ({ todo, onComplete, onDelete }) => (
  <div className="todo">
    <span
      className="todo-item__text"
      style={{
        color: todo.completed ? "#bdc3c7" : "#34495e",
        opacity: todo.completed ? 0.7 : 1,
      }}
    >
      {todo.task}
    </span>
    <button
      className="complete-btn"
      onClick={onComplete}
      aria-label="Mark as complete"
    >
      <i className="fas fa-check"></i>
    </button>
    <button className="delete-btn" onClick={onDelete} aria-label="Delete todo">
      <i className="far fa-times-circle"></i>
    </button>
  </div>
);

// export default Todo;
export default connect(null)(Todo);
