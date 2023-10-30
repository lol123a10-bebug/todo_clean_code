import { FastifyReply, FastifyRequest } from "fastify";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";
import { todoUsecases } from "core/domain/use-cases";
import { Todo } from "core/domain/entities";

const todoRepository = new TodoRepositoryImpl();

type TodoFn = (req: FastifyRequest, res: FastifyReply) => Promise<void>;

export const findTodoById: TodoFn = async (req, res) => {
  try {
    const { id } = req.params as { id: string };

    const findTodoById = new todoUsecases.FindById(todoRepository);
    const todo = await findTodoById.execute(id);

    res.status(200).send({ success: true, data: { todo } });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
};

export const findAllTodos: TodoFn = async (req, res) => {
  try {
    const findAllTodos = new todoUsecases.FindAll(todoRepository);
    const todos = await findAllTodos.execute();

    res.status(200).send({ success: true, data: { todos } });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
};

export const createTodo: TodoFn = async (req, res): Promise<void> => {
  try {
    const { title, description } = req.body as any;
    const createTodo = new todoUsecases.Create(todoRepository);
    const newTodo = await createTodo.execute({ title, description });

    res.status(201).send({
      success: true,
      data: { todo: newTodo },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
};

export const updateTodo: TodoFn = async (req, res) => {
  try {
    const { id } = req.params as { id: string };
    const data = req.body as Omit<Todo, "id">;

    const updateTodo = new todoUsecases.Update(todoRepository);
    await updateTodo.execute({ id, ...data });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
};

export const deleteTodo: TodoFn = async (req, res) => {
  try {
    const { id } = req.params as { id: string };

    const deleteTodo = new todoUsecases.Delete(todoRepository);
    await deleteTodo.execute(id);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
};
