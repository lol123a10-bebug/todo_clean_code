import { TodoRepository } from "core/repositories";

export class FindByIdTodo {
  constructor(private todoRepository: TodoRepository) {}
  async execute(id: string) {
    const todo = await this.todoRepository.findById(id);

    if (!todo) {
      throw Error("Wrong id");
    }

    return todo;
  }
}
