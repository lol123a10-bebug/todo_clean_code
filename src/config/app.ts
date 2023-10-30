import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { connectDatabase } from "../infrastructure/database";
import { todoController } from "../application/controllers";

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

app.post("/todos", todoController.createTodo);

app.setErrorHandler((error, request, reply) => {
  app.log.error(error);
  reply.status(500).send("Internal Server Error");
});

