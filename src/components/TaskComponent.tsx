/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useAppDispatch } from '../hooks/reduxHooks';
import { deleteTask, openEdit, toggleTask, viewTask } from '../redux/Reducers/Tasks';
import { Task } from '../types';

function TaskComponent({ task }: { task: Task }) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row gap-3 items-center">
      <div className={ `${task.completed ? 'bg-green-500' : 'bg-red-500'} w-5 h-5` } />
      <button
        onClick={ () => {
          dispatch(openEdit({ type: 'view', bool: 1 }));
          dispatch(viewTask(task));
        } }
      >
        <p>{task.taskName}</p>
      </button>
      <button onClick={ () => dispatch(toggleTask(task)) }>
        Concluir Task
      </button>
      <button onClick={ () => dispatch(deleteTask(task)) }>
        Remove Task
      </button>
      <button
        onClick={ () => {
          dispatch(openEdit({ type: 'edit', bool: 1 }));
          dispatch(viewTask(task));
        } }
      >
        Edit Task
      </button>
    </div>
  );
}

export default TaskComponent;
