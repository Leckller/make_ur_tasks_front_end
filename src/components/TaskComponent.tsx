import { FaRegTrashAlt } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { openEdit, toggleTask, viewTask } from '../redux/Reducers/Tasks';
import { Task } from '../types';
import { DatabaseThunk } from '../redux/Reducers/Server';

function TaskComponent({ task }: { task: Task }) {
  const dispatch = useAppDispatch();
  const { User: { token } } = useAppSelector((s) => s);
  return (
    <div
      className="flex flex-row gap-3 items-center flex-nowrap w-[90%]
      border-4 border-black rounded-md p-2 max-w-[500px]"
    >
      <input
        type="checkbox"
        checked={ task.completed }
        onChange={ () => dispatch(toggleTask(task)) }
        className={ `${task.completed ? 'bg-green-500' : 'bg-red-500'} w-5 h-5` }
      />
      <button
        className="font-semibold w-[80%] break-words"
        onClick={ () => {
          dispatch(openEdit({ type: 'view', bool: 1 }));
          dispatch(viewTask(task));
        } }
      >
        <p>{task.taskName}</p>
      </button>

      <FaRegTrashAlt
        onClick={ () => dispatch(DatabaseThunk
          .deletarTarefaThunk(token.length > 20)(task.id)) }
      />
      <BsPencil
        onClick={ () => {
          dispatch(openEdit({ type: 'edit', bool: 1 }));
          dispatch(viewTask(task));
        } }
      />
    </div>
  );
}

export default TaskComponent;
