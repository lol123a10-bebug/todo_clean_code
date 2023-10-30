import { TodoRepository } from "core/repositories";

export class FindById {
  constructor(private repository: TodoRepository) {}
  async execute(id: string) {
    const todo = await this.repository.findById(id);

    if (!todo) {
      throw Error("Wrong id");
    }

    return todo;
  }
}
