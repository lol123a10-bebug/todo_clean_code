import { FastifyReply, FastifyRequest } from "fastify";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";
import { todoUsecases } from "core/domain/use-cases";
import { Todo } from "core/domain/entities";

const todoRepository = new TodoRepositoryImpl();

type TodoFn = (req: FastifyRequest, res: FastifyReply) => Promise<void>;

export const findByIdTodo: TodoFn = async (req, res) => {
  try {
    const { id } = req.params as { id: string };

    const findByIdTodo = new todoUsecases.FindByIdTodo(todoRepository);
    const todo = await findByIdTodo.execute(id);
    res.status(200).send({ success: true, data: { todo } });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
};

export const findAllTodos: TodoFn = async (req, res) => {
  try {
    const findAllTodos = new todoUsecases.FindAllTodos(todoRepository);
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
    const createTodoUseCase = new todoUsecases.CreateTodo(todoRepository);
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

export const updateTodo: TodoFn = async (req, res) => {
  try {
    const { id } = req.params as { id: string };
    const data = req.body as Omit<Todo, "id">;

    const updateTodoUsecase = new todoUsecases.UpdateTodo(todoRepository);

    await updateTodoUsecase.execute({ id, ...data });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
};

export const deleteTodo: TodoFn = async (req, res) => {
  try {
    const { id } = req.params as { id: string };

    const deleteTodo = new todoUsecases.DeleteTodo(todoRepository);
    await deleteTodo.execute(id);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
};
