import { Todo } from "core/domain/entities";
import { TodoRepository } from "core/repositories";

export class Update {
  constructor(private repository: TodoRepository) {}

  async execute(todo: Todo) {
    await this.repository.update(todo);
  }
}
