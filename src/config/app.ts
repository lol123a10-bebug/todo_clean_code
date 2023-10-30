require("dotenv").config();

import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { connectDatabase } from "infrastructure/database";
import { todoController } from "application/controllers";

export const app: FastifyInstance = fastify({ logger: true });

app.register(cors);
app.register(helmet);

connectDatabase()
  .then(() => {
    app.log.info("DB connected");
  })
  .catch((error) => {
    app.log.error("db connection failed", error);
  });

app.get("/todo/:id", todoController.findTodoById);
app.get("/todo", todoController.findAllTodos);
app.post("/todos", todoController.createTodo);
app.delete("/todo/:id", todoController.deleteTodo);
app.patch("/todo/:id", todoController.updateTodo);

app.setErrorHandler((error, request, reply) => {
  app.log.error(error);
  reply.status(500).send("Internal Server Error");
});

app.listen({
  port: 3000,
});
