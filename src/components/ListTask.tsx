import Swal from 'sweetalert2';
import { useContext } from 'react';
import { deleteTask, editTask } from '../service/fetch';
import AppContext from '../context/AppContext';

function ListTask() {
  const { token, reload, setReload, userTasks } = useContext(AppContext);
  const { tasks } = userTasks;

  const handleDeleteTask = async (id:number) => {
    const request = await deleteTask(id, token);
    Swal.fire(request.message);
    setReload(!reload);
  };
  const handleEditTask = async (id:number, completed: boolean) => {
    const request = await editTask({ completed }, id, token);
    Swal.fire(request.message);
    setReload(!reload);
  };

  return (
    <section
      className="h-[72vh] overflow-auto flex flex-col gap-2"
    >
      {tasks ? (
        tasks.map((task) => (
          <article
            className={ `w-[220px] min-h-20 max-h-20 rounded-lg flex
          ${task.completed ? 'bg-[#68D2DF]' : 'bg-[#11111F] text-white'}
          flex-col pl-2 pt-1 relative` }
            key={ task.id }
          >
            <h2 className={ `${task.completed ? 'line-through' : ''}` }>
              {task.taskName}
            </h2>
            {/* <span>
            {JSON.stringify(task.deadline).split('"')[1].split('T')[0]}
          </span> */}
            <span>
              {JSON.stringify(task.deadline).split('"')[1]
                .split('T')[1].split('.')[0]}
            </span>
            <div className="flex flex-row overflow-hidden gap-2">

              <h3 className="w-36 break-words">
                {task.description ? task.description : 'Focus!'}
              </h3>

              <div className="flex flex-row gap-2 font-extrabold">
                <button
                  className="w-5 h-5 rounded-full border flex
                justify-center items-center"
                  onClick={ () => {
                    handleDeleteTask(task.id);
                  } }
                >
                  X
                </button>
                <button
                  className={ `w-5 h-5 rounded-full border flex
                justify-center items-center` }
                  onClick={ () => {
                    handleEditTask(task.id, !task.completed);
                  } }
                >
                  O
                </button>
              </div>

            </div>

          </article>))
      ) : (
        <h2>Não há Tarefas para serem feitas.</h2>
      )}
    </section>
  );
}

export default ListTask;
