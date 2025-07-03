const repository = require("../../src/repository/todo");

describe("TODO repository", () => {
  describe("addTodo", () => {
    it("should return the todo list", async () => {
      const expected = {
        todos: [
          {
            id: 1,
            task: "This is a todo example",
            completed: false,
          },
        ],
      };
      const actual = await repository.getTodos();
      expect(actual).toEqual(expected);
    });
  });

  describe("addTodo", () => {
    it("should add a new todo", async () => {
      const newTask = "New test task";
      const result = await repository.addTodo(newTask);

      expect(result).toMatchObject({
        id: expect.any(Number),
        task: newTask,
        completed: false,
      });

      // Verify it was added to the list
      const { todos } = await repository.getTodos();
      expect(todos).toContainEqual(result);
    });

    it("should increment the id for each new todo", async () => {
      const first = await repository.addTodo("First");
      const second = await repository.addTodo("Second");

      expect(second.id).toBeGreaterThan(first.id);
    });
  });

  describe("completeTodo", () => {
    it("should toggle the completed status of a todo", async () => {
      // First add a todo
      const { id } = await repository.addTodo("Test toggle");

      // Toggle to complete
      const completedTodo = await repository.completeTodo(id);
      expect(completedTodo.completed).toBe(true);

      // Toggle back to incomplete
      const incompleteTodo = await repository.completeTodo(id);
      expect(incompleteTodo.completed).toBe(false);
    });

    it("should throw an error for non-existent todo", async () => {
      await expect(repository.completeTodo(999)).rejects.toThrow(
        "Todo not found"
      );
    });
  });

  describe("deleteTodo", () => {
    it("should delete a todo by id", async () => {
      // Add and then delete a todo
      const { id } = await repository.addTodo("Test delete");
      await repository.deleteTodo(id);

      // Verify it's gone
      const { todos } = await repository.getTodos();
      expect(todos.some((todo) => todo.id === id)).toBe(false);
    });

    it("should throw an error when deleting non-existent todo", async () => {
      await expect(repository.deleteTodo(999)).rejects.toThrow(
        "Todo not found"
      );
    });
  });
});
