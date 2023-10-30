import { TodoRepository } from "core/repositories";

export class DeleteTodo {
  constructor(private todoRepository: TodoRepository) {}

  async execute(id: string) {
    await this.todoRepository.delete(id);
  }
}
