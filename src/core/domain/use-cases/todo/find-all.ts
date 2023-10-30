import { TodoRepository } from "core/repositories";

export class FindAll {
  constructor(private repository: TodoRepository) {}

  execute() {
    return this.repository.findAll();
  }
}
