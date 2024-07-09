export default interface Task {
  id: number;
  taskName: string;
  deadline: Date;
  description: string;
  completed: boolean
  userId: number
}
export type TaskFields = 'taskName' | 'deadline'
| 'description' | 'completed';

export type TaskWithNoId = Omit<Omit<Task, 'id'>, 'userId'>;

export type PopupTypes = 'edit' | 'add' | 'view' | 'login' | 'cadastro' | 'config';
