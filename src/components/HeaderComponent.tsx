import { useAppDispatch } from '../hooks/reduxHooks';
import { openEdit } from '../redux/Reducers/Tasks';

function HeaderComponent() {
  const dispatch = useAppDispatch();

  return (
    <header className="flex flex-row justify-between w-full h-[10%] p-2 text-center">
      <h1>Make Ur Tasks!</h1>
      <section className="flex flex-row gap-5">
        <button
          className="text-center border"
          onClick={ () => dispatch(openEdit({ bool: 1, type: 'config' })) }
        >
          Configurações
        </button>
        <button
          className="text-center border"
          onClick={ () => dispatch(openEdit({ bool: 1, type: 'add' })) }
        >
          Make a Task
        </button>
      </section>
    </header>
  );
}

export default HeaderComponent;
