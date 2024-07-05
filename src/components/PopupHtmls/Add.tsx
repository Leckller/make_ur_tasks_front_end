import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addTask, makeTask, openEdit, resetCooking } from '../../redux/Reducers/Tasks';

function Add() {
  const task = useAppSelector((state) => state.Task.coockingTask);
  const dispatch = useAppDispatch();
  return (
    <div
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
      {/* para implementar */}
      {/* Adicionar Checks
      <button>Novo Check</button> */}
      <button
        onClick={ () => {
          dispatch(openEdit({ bool: 0, type: 'view' }));
          dispatch(addTask(task));
          dispatch(resetCooking());
        } }
      >
        Adicionar
      </button>
    </div>
  );
}

export default Add;
