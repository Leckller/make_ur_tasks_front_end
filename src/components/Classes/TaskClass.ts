import { Checks } from '../../service/Server';
import { Task } from '../../types';

export default class TaskClass implements Task {
  id: number;

  userId: number = 1;

  checks: Checks[] = [];

  completed: boolean = false;

  deadline: Date = '24/01/2005' as unknown as Date;

  description: string = '';

  taskName: string = '';

  constructor(id: number) {
    this.id = id;
  }
}
