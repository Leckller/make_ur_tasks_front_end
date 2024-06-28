import HeaderComponent from '../components/HeaderComponent';
import Popup from '../components/Popup';
import Add from '../components/PopupHtmls/Add';
import Edit from '../components/PopupHtmls/Edit';
import View from '../components/PopupHtmls/View';
import TaskComponent from '../components/TaskComponent';
import { useAppSelector } from '../hooks/reduxHooks';

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
            // eslint-disable-next-line no-nested-ternary
            open.type === 'add' ? <Add /> : open.type === 'edit' ? <Edit /> : <View />
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
