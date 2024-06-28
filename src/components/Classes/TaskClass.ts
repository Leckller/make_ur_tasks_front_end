import { Checks } from '../../service/Server';
import { TaskWithNoId } from '../../types';

export default class TaskClass implements TaskWithNoId {
  checks: Checks[] = [];

  completed: boolean = false;

  deadline: Date = '24/01/2005' as unknown as Date;

  description: string = '';

  taskName: string = '';
}
