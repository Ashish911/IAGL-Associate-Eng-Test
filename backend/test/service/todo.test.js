describe("TODO Service", () => {
  describe("getTodos", () => {
    it("should get todos from repository", async () => {
      const expected = {
        todos: [
          {
            id: 1,
            task: "Test task",
            completed: false,
          },
        ],
      };
      const todoRepository = {
        getTodos: async () => Promise.resolve(expected),
      };

      const todoService = require("../../src/service/todo")(todoRepository);
      const actual = await todoService.getTodos();
      expect(actual).toEqual(expected);
    });
  });

  describe("addTodo", () => {
    it("should add a new todo", async () => {
      const newTask = "New task";
      const expected = {
        id: 2,
        task: newTask,
        completed: false,
      };
      const todoRepository = {
        addTodo: async (task) =>
          Promise.resolve({
            id: 2,
            task,
            completed: false,
          }),
      };

      const todoService = require("../../src/service/todo")(todoRepository);
      const result = await todoService.addTodo(newTask);
      expect(result).toEqual(expected);
    });

    it("should throw error for empty task", async () => {
      const todoRepository = {
        addTodo: async () => Promise.resolve(),
      };
      const todoService = require("../../src/service/todo")(todoRepository);

      await expect(todoService.addTodo("")).rejects.toThrow(
        "Task cannot be empty"
      );
    });
  });

  describe("completeTodo", () => {
    it("should mark a todo as completed", async () => {
      const todoId = 1;
      const expected = {
        id: todoId,
        task: "Test task",
        completed: true,
      };
      const todoRepository = {
        completeTodo: async (id) =>
          Promise.resolve({
            id,
            task: "Test task",
            completed: true,
          }),
      };

      const todoService = require("../../src/service/todo")(todoRepository);
      const result = await todoService.completeTodo(todoId);
      expect(result).toEqual(expected);
    });

    it("should handle non-existent todo", async () => {
      const todoRepository = {
        completeTodo: async () => Promise.reject(new Error("Todo not found")),
      };
      const todoService = require("../../src/service/todo")(todoRepository);

      await expect(todoService.completeTodo(999)).rejects.toThrow(
        "Todo not found"
      );
    });
  });

  describe("deleteTodo", () => {
    it("should delete a todo", async () => {
      const todoId = 1;
      const expected = {
        id: todoId,
        task: "Delete me",
        completed: false,
      };
      const todoRepository = {
        deleteTodo: async (id) =>
          Promise.resolve({
            id,
            task: "Delete me",
            completed: false,
          }),
      };

      const todoService = require("../../src/service/todo")(todoRepository);
      const result = await todoService.deleteTodo(todoId);
      expect(result).toEqual(expected);
    });

    it("should handle non-existent todo on delete", async () => {
      const todoRepository = {
        deleteTodo: async () => Promise.reject(new Error("Todo not found")),
      };
      const todoService = require("../../src/service/todo")(todoRepository);

      await expect(todoService.deleteTodo(999)).rejects.toThrow(
        "Todo not found"
      );
    });
  });
});
