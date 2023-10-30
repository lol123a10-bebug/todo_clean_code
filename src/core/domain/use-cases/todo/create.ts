import { Todo } from "core/domain/entities";
import { TodoRepository } from "core/repositories";

interface CreateTodoInput {
  title: string;
  description: string;
}

export class Create {
  constructor(private repository: TodoRepository) {}

  async executre(input: CreateTodoInput): Promise<Todo> {
    const { title, description } = input;
    const todo = new Todo(title, description);
    await this.repository.add(todo);
    return todo;
  }
}
