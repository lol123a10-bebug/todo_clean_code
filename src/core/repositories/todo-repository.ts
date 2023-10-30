import { Todo } from "core/domain/entities";

export interface TodoRepository {
  add(todo: Todo): Promise<void>;
  findById(id: string): Promise<Todo | null>;
  findAll(): Promise<Todo[]>;
  update(todo: Todo): Promise<void>;
  delete(id: string): Promise<void>;
}
