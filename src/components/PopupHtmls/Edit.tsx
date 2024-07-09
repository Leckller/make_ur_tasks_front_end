import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { editTask, makeTask, openEdit } from '../../redux/Reducers/Tasks';

function Edit() {
  const dispatch = useAppDispatch();
  const task = useAppSelector((s) => s.Task.coockingTask);
  return (
    <form
      className="bg-white rounded-md h-[90%]
      flex flex-col justify-around
      "
      onSubmit={ (e) => {
        e.preventDefault();
        setTimeout(() => {
          dispatch(openEdit({ bool: 0, type: 'edit' }));
        }, 150);
      } }
    >
      <label>
        <h2>Nome da Tarefa</h2>
        <input
          onChange={ ({ target: { value } }) => {
            dispatch(makeTask({ field: 'taskName', value }));
          } }
          type="text"
          value={ task.taskName }
        />
      </label>
      <label>
        <h2>Data para finalizar</h2>
        <input
          onChange={ ({ target: { value } }) => {
            dispatch(makeTask({ field: 'deadline', value }));
          } }
          type="date"
          value={ task.deadline.toString() }
        />
      </label>
      <label>
        <h2>Descrição</h2>
        <input
          onChange={ ({ target: { value } }) => {
            dispatch(makeTask({ field: 'description', value }));
          } }
          type="text"
          value={ task.description }
        />
      </label>

      <button type="submit" onClick={ () => dispatch(editTask(task)) }>
        Concluir
      </button>
    </form>
  );
}

export default Edit;
