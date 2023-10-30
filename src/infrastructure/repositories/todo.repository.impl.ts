import { Todo } from "core/domain/entities";
import { TodoRepository } from "core/repositories";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Todo)
export class TodoRepositoryImpl
  extends Repository<Todo>
  implements TodoRepository
{
  async add(todo: Todo): Promise<void> {
    this.save(todo);
  }

  async findById(id: string): Promise<Todo | null> {
    const todo = await this.findOne({ where: { id } });

    return todo || null;
  }

  async findAll(): Promise<Todo[]> {
    return this.find();
  }

  // @ts-ignore
  async update(todo: Todo): Promise<void> {
    await this.save(todo);
  }

  // @ts-ignore
  async delete(id: string): Promise<void> {
    await this.delete(id);
  }
}
