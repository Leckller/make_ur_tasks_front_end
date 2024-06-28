interface Checks {
  text: string,
  completed: boolean,
}

export default interface Task {
  id: number;
  taskName: string;
  deadline: Date;
  description: string;
  checks: Checks[]
  completed: boolean
  userId: number
}
export type TaskFields = 'taskName' | 'deadline'
| 'description' | 'checks' | 'completed';

export type TaskWithNoId = Omit<Omit<Task, 'id'>, 'userId'>;

export type PopupTypes = 'edit' | 'add' | 'view';
