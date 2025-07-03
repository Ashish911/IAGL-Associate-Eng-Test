const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/api/todo.route");

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  // API routes
  server.use("/api/todo", todoRoutes);

  return server;
};
module.exports = server;
