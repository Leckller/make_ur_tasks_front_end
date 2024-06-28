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
| 'description' | 'checks' | 'completed' | 'userId';

export type TaskWithNoId = Omit<Task, 'id'>;
