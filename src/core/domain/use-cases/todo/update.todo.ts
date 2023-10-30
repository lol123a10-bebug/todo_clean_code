import { Todo } from "core/domain/entities";
import { TodoRepository } from "core/repositories";

export class UpdateTodo {
  constructor(private todoRepository: TodoRepository) {}

  async execute(todo: Todo) {
    await this.todoRepository.update(todo);
  }
}
