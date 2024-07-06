import { useAppDispatch } from '../../hooks/reduxHooks';
import { openEdit } from '../../redux/Reducers/Tasks';

function Config() {
  const dispatch = useAppDispatch();
  return (
    <section className="flex flex-col justify-center items-center h-full w-full">
      <aside className="flex flex-col gap-2 min-w-28 w-[30%]">
        <button
          className="border-2 border-black rounded-md bg-white"
          onClick={ () => dispatch(openEdit({ bool: 1, type: 'login' })) }
        >
          Logar
        </button>
        <button
          className="border-2 border-black rounded-md bg-white"
          onClick={ () => dispatch(openEdit({ bool: 1, type: 'cadastro' })) }
        >
          Cadastrar
        </button>
      </aside>
    </section>
  );
}

export default Config;
