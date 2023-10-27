import { TodoRepository } from "../../../repositories/todo-repository";
import { Todo } from "../../entities";

interface CreateTodoInput {
  title: string;
  description: string;
}

export class CreateTodo {
  constructor(private todoRepository: TodoRepository) {}

  async executre(input: CreateTodoInput): Promise<Todo> {
    const { title, description } = input;
    const todo = new Todo(title, description);
    await this.todoRepository.add(todo);
    return todo;
  }
}
