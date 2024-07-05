import HeaderComponent from '../components/HeaderComponent';
import Popup from '../components/Popup';
import TaskComponent from '../components/TaskComponent';
import { useAppSelector } from '../hooks/reduxHooks';
import popupGen from '../utils/popupGen';

function MainRoute() {
  const { edit: open, tasks } = useAppSelector((state) => state.Task);
  return (
    <div
      className={ `
      w-screen h-screen flex items-center gap-5 flex-col
      ${open.bool ? 'bg-zinc-700' : ''}
      ` }
    >
      <HeaderComponent />

      {open.bool && (
        <Popup>
          {
            popupGen(open.type)
          }
        </Popup>
      )}

      {tasks && tasks.map((task, i) => (
        <TaskComponent key={ task.taskName + i } task={ task } />
      ))}
    </div>
  );
}

export default MainRoute;
