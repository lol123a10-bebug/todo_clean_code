import { TodoRepository } from "core/repositories";

export class FindAllTodos {
  constructor(private todoRepository: TodoRepository) {}

  execute() {
    return this.todoRepository.findAll();
  }
}
