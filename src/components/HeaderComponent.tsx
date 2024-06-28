import { useAppDispatch } from '../hooks/reduxHooks';
import { openEdit } from '../redux/Reducers/Tasks';

function HeaderComponent() {
  const dispatch = useAppDispatch();

  return (
    <header className="flex flex-row justify-between w-full h-[10%] p-2 text-center">
      <h1>Make Ur Tasks!</h1>
      <div>
        <button
          className="text-center border"
          onClick={ () => dispatch(openEdit({ bool: 1, type: 'add' })) }
        >
          Make a Task
        </button>
      </div>
    </header>
  );
}

export default HeaderComponent;
