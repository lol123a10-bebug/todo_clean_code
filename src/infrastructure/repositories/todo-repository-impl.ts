import { EntityRepository, Repository } from "typeorm";
import { TodoRepository } from "../../core/repositories/todo-repository";
import { Todo } from "../../core/domain/entities";

@EntityRepository(Todo)
export class TodoRepositoryImpl
  extends Repository<Todo>
  implements TodoRepository
{
  async add(todo: Todo): Promise<void> {
    this.save(todo);
  }

  async findById(id: string): Promise<Todo | null> {
    return this.findOne({ where: { id } });
  }

  async findAll(): Promise<Todo[]> {
    return this.find();
  }

  async update(todo: Todo): Promise<void> {
    await this.save(todo);
  }

  async delete(id: string): Promise<void> {
    await this.delete(id);
  }
}
