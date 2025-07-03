const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos();
    },
    addTodo: async (task) => {
      if (!task || task.trim() === "") {
        throw new Error("Task cannot be empty");
      }
      return await repository.addTodo(task);
    },
    completeTodo: async (id) => {
      return await repository.completeTodo(id);
    },
    deleteTodo: async (id) => {
      return await repository.deleteTodo(id);
    },
  };
};

module.exports = todoService;
