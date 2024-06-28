import Popup from '../components/Popup';
import { mockTask } from '../Mocks/Task.Mock';
import TaskComponent from '../components/TaskComponent';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { openEdit } from '../redux/Reducers/Tasks';

function MainRoute() {
  const { edit: open } = useAppSelector((state) => state.Task);
  const dispatch = useAppDispatch();
  return (
    <div
      onFocus={ () => dispatch(openEdit()) }
      className={ `
      w-screen h-screen flex items-center gap-5 flex-col
      .transitionClean
      ${open ? 'bg-zinc-700' : ''}
      ` }
    >
      <header className="flex flex-row justify-between w-full h-[10%] p-2 text-center">
        <h1>Make Ur Tasks!</h1>
        <div>
          <button
            className="text-center border"
            onClick={ () => dispatch(openEdit()) }
          >
            Make a Task
          </button>
        </div>
      </header>

      {open && (
        <Popup title="teste">
          oi
        </Popup>
      )}
      {mockTask && mockTask.map((task) => (
        <TaskComponent key={ task.id } task={ task } />
      ))}
    </div>
  );
}

export default MainRoute;
