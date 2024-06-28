/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useAppDispatch } from '../hooks/reduxHooks';
import { openEdit } from '../redux/Reducers/Tasks';
import { Task } from '../types';

function TaskComponent({ task }: { task: Task }) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row gap-3">
      <h2>{task.taskName}</h2>
      <button>
        Concluir Task
      </button>
      <button>
        Remove Task
      </button>
      <button
        className="bg-black"
        onClick={ () => dispatch(openEdit()) }
      >
        Edit Task
      </button>
    </div>
  );
}

export default TaskComponent;
