import React, { Component } from "react";
import Todo from "./Todo";
import { fetchTodos } from "../actions";
import { connect } from "react-redux";

class TodoList extends Component {
  state = {};

  getFilteredTodos = () => {
    const { todos, filter } = this.props;

    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "notCompleted":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  render() {
    const { error } = this.props;
    const filteredTodos = this.getFilteredTodos();

    return (
      <ul className="todo-list">
        {filteredTodos && filteredTodos.length ? (
          filteredTodos.map((todo) => (
            <li key={`todo-${todo.id}`}>
              <Todo todo={todo} />
            </li>
          ))
        ) : (
          <div className="no-todos">No todos, yay!</div>
        )}
        {error && <div className="error-message">{error}</div>}
      </ul>
    );
  }
}

// Deleting isLoading because i dont see the use of it in the current state. There is not a lot of data so i made the decision to not use it.
const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filter,
  error: state.error,
});

export default connect(mapStateToProps, {})(TodoList);
