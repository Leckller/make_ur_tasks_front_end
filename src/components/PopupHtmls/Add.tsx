import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { DatabaseThunk } from '../../redux/Reducers/Server';
import { makeTask, openEdit, resetCooking } from '../../redux/Reducers/Tasks';

function Add() {
  const { User: { token }, Task: { coockingTask: task } } = useAppSelector((s) => s);
  const dispatch = useAppDispatch();
  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
      } }
      className="bg-white rounded-md h-[90%]
      flex flex-col justify-around
      "
    >
      <label>
        <h3>
          Nome da Tarefa
        </h3>
        <input
          onChange={ ({ target: { value } }) => {
            dispatch(makeTask({ field: 'taskName', value }));
          } }
          type="text"
        />
      </label>
      <label>
        <h3>
          Prazo para concluir
        </h3>
        <input
          onChange={ ({ target: { value } }) => {
            dispatch(makeTask({ field: 'deadline', value }));
          } }
          type="date"
        />
      </label>
      <label>
        <h3>
          Descrição da tarefa
        </h3>
        <input
          onChange={ ({ target: { value } }) => {
            dispatch(makeTask({ field: 'description', value }));
          } }
          type="text"
        />
      </label>
      <button
        type="submit"
        onClick={ () => {
          dispatch(DatabaseThunk.criarTarefaThunk(token.length > 20)(task));
          dispatch(resetCooking());
          setTimeout(() => {
            dispatch(openEdit({ bool: 0, type: 'view' }));
          }, 200);
        } }
      >
        Adicionar
      </button>
    </form>
  );
}

export default Add;
