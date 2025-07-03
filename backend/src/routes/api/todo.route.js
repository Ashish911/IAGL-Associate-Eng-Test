const express = require("express");
const router = express.Router();
const repository = require("../../repository/todo");
const todoService = require("../../service/todo")(repository);
const { successHandler, errorHandler } = require("../../utils/handlers");

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    return successHandler(res, todos.todos, "Todos fetched successfully");
  } catch (error) {
    return errorHandler(res, "Failed to fetch todos", 500);
  }
});

// Add a new todo
router.post("/", async (req, res) => {
  try {
    if (!req.body.task) {
      return errorHandler(res, "Task is required", 400);
    }
    const todo = await todoService.addTodo(req.body.task);
    return successHandler(res, todo, "Todo created successfully", 201);
  } catch (error) {
    return errorHandler(res, error.message, 400);
  }
});

// Toggle todo completion
router.put("/:id", async (req, res) => {
  try {
    const todo = await todoService.completeTodo(parseInt(req.params.id));
    if (!todo) {
      return errorHandler(res, "Todo not found", 404);
    }
    return successHandler(res, todo, "Todo updated successfully");
  } catch (error) {
    return errorHandler(res, error.message, 404);
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const result = await todoService.deleteTodo(parseInt(req.params.id));
    if (!result) {
      return errorHandler(res, "Todo not found", 404);
    }
    return successHandler(res, null, "Todo deleted successfully");
  } catch (error) {
    return errorHandler(res, error.message, 404);
  }
});

module.exports = router;
