import { Task } from '../../types';

export default class TaskClass implements Task {
  id: number;

  userId: number = 1;

  completed: boolean = false;

  deadline: Date = '24/01/2005' as unknown as Date;

  description: string;

  taskName: string;

  constructor(id = 99999, taskName = '', description = '', deadline = new Date()) {
    this.id = id;
    this.deadline = deadline;
    this.description = description;
    this.taskName = taskName;
  }
}
