import { useAppDispatch } from '../../hooks/reduxHooks';
import { openEdit } from '../../redux/Reducers/Tasks';

function Config() {
  const dispatch = useAppDispatch();
  return (
    <section>
      <button onClick={ () => dispatch(openEdit({ bool: 1, type: 'login' })) }>
        Logar
      </button>
      <button onClick={ () => dispatch(openEdit({ bool: 1, type: 'cadastro' })) }>
        Cadastrar
      </button>
    </section>
  );
}

export default Config;
