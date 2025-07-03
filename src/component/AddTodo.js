import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, setFilter } from "../actions/index";

class AddTodo extends Component {
  state = {
    task: "",
    error: "",
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleFilterChange = (e) => {
    this.props.setFilter(e.target.value);
  };

  render() {
    const { task, error } = this.state;

    return (
      <div className="container">
        <form className="todo-form">
          <input
            type="text"
            className={`todo-input ${error ? "error" : ""}`}
            value={task}
            onChange={this.handleChange}
            placeholder="Add a new task..."
            aria-label="Add a new todo"
          />
          <button className="todo-btn" type="submit" aria-label="Add todo">
            <i className="fas fa-plus-circle"></i>
          </button>
          <div className="select">
            <select
              name="todos"
              className="filter-todo"
              onChange={this.handleFilterChange}
              value={this.props.currentFilter || "all"}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="notCompleted">Not Completed</option>
            </select>
          </div>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFilter: state.filter,
});

export default connect(mapStateToProps, { fetchTodos, setFilter })(AddTodo);
