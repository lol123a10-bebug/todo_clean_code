import { v4 as uuid } from "uuid";

export class Todo {
  id: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(public title: string, public description: string) {
    this.id = Todo.generateId();
    this.completed = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  markAsCompleted(): void {
    this.completed = true;
    this.updatedAt = new Date();
  }

  static generateId() {
    return uuid();
  }
}
