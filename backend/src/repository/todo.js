// A Helper function to get the next todo id
const getNextId = (todoList) => {
  return todoList.todos.length > 0
    ? Math.max(...todoList.todos.map((todo) => todo.id)) + 1
    : 1;
};

// Changed the current todo list data structure by adding the status and id for easier access in update and delete operations
let todoList = {
  todos: [
    {
      id: 1,
      task: "This is a todo example",
      completed: false,
    },
  ],
};

module.exports = {
  // Simple Todo list get method. No Changes needed here.
  getTodos: () => Promise.resolve(todoList),

  // Add Todo method.
  addTodo: (task) => {
    // Creates a new object and pus in our current list of todos.
    const newTodo = {
      id: getNextId(todoList),
      task,
      completed: false,
    };

    todoList.todos.push(newTodo);
    return Promise.resolve(newTodo);
  },

  // Update complete state of TODO
  completeTodo: (id) => {
    // Finds the current todo by id and toggles the completed state.
    const todo = todoList.todos.find((todo) => todo.id === id);
    if (!todo) {
      return Promise.reject(new Error("Todo not found"));
    }
    todo.completed = !todo.completed;
    return Promise.resolve(todo);
  },

  // Delete a todo from the list
  deleteTodo: (id) => {
    // Finds the current todo by id and removes it from the list.
    const index = todoList.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return Promise.reject(new Error("Todo not found"));
    }
    const [deletedTodo] = todoList.todos.splice(index, 1);
    return Promise.resolve(deletedTodo);
  },
};
