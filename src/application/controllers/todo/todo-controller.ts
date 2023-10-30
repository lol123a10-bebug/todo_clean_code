import { FastifyReply, FastifyRequest } from "fastify";
import { TodoRepositoryImpl } from "../../../infrastructure/repositories/todo-repository-impl";
import { CreateTodo } from "../../../core/domain/use-cases";

const todoRepository = new TodoRepositoryImpl();

export const createTodo = async (
  req: FastifyRequest,
  res: FastifyReply
): Promise<void> => {
  try {
    const { title, description } = req.body as any;
    const createTodoUseCase = new CreateTodo(todoRepository);
    const newTodo = await createTodoUseCase.executre({ title, description });

    res.status(201).send({
      success: true,
      data: newTodo,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
};
