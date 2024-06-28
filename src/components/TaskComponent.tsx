/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useAppDispatch } from '../hooks/reduxHooks';
import { openEdit, viewTask } from '../redux/Reducers/Tasks';
import { TaskWithNoId } from '../types';

function TaskComponent({ task }: { task: TaskWithNoId }) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row gap-3">
      <button
        onClick={ () => {
          dispatch(openEdit({ type: 'view', bool: 1 }));
          dispatch(viewTask(task));
        } }
      >
        <h2>{task.taskName}</h2>
      </button>
      <button>
        Concluir Task
      </button>
      <button>
        Remove Task
      </button>
      <button
        onClick={ () => dispatch(openEdit({ type: 'edit', bool: 1 })) }
      >
        Edit Task
      </button>
    </div>
  );
}

export default TaskComponent;
