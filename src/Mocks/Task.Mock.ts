import { Task } from '../types';

export const mockTask = [{
  checks: [{}],
  completed: false,
  deadline: new Date(),
  description: 'Termina esse diabo zé',
  id: 1,
  taskName: 'Terminar o frontend desse app',
  userId: 1,
}] as Task[];
