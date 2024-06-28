import { mockTask } from '../Mocks/Task.Mock';
import HeaderComponent from '../components/HeaderComponent';
import Popup from '../components/Popup';
import Add from '../components/PopupHtmls/Add';
import Edit from '../components/PopupHtmls/Edit';
import View from '../components/PopupHtmls/View';
import TaskComponent from '../components/TaskComponent';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { openEdit } from '../redux/Reducers/Tasks';

function MainRoute() {
  const { edit: open } = useAppSelector((state) => state.Task);
  const dispatch = useAppDispatch();
  return (
    <div
      onFocus={ () => dispatch(openEdit({ bool: 0, type: 'view' })) }
      className={ `
      w-screen h-screen flex items-center gap-5 flex-col
      ${open.bool ? 'bg-zinc-700' : ''}
      ` }
    >
      <HeaderComponent />

      {open.bool && (
        <Popup title="teste">
          {
            // eslint-disable-next-line no-nested-ternary
            open.type === 'add' ? <Add /> : open.type === 'edit' ? <Edit /> : <View />
          }
        </Popup>
      )}

      {mockTask && mockTask.map((task) => (
        <TaskComponent key={ task.id } task={ task } />
      ))}
    </div>
  );
}

export default MainRoute;
