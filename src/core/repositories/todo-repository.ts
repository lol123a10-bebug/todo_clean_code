import { Todo } from "../domain/entities";

export interface TodoRepository {
  add(todo: Todo): Promise<void>;
}
