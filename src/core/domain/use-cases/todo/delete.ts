import { TodoRepository } from "core/repositories";

export class Delete {
  constructor(private repository: TodoRepository) {}

  async execute(id: string) {
    await this.repository.delete(id);
  }
}
