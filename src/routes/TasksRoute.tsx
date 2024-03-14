import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AppContext from '../context/AppContext';
import CreateTask from '../components/CreateTask';
import { allTasks, deleteTask, editTask } from '../service/fetch';

function TasksRoute() {
  const [newTask, setNewTask] = useState(false);
  const navigate = useNavigate();
  const { nickName, token, setReload, setUserTasks, handlerNat, userTasks,
    reload } = useContext(AppContext);

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

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
    setTimeout(() => {
      allTasks(token).then((request) => {
        setUserTasks(request);
        handlerNat('nickName', request.nickName);
      });
    }, 1000);
  }, [reload]);

  return (
    <div className="h-screen w-screen p-5 flex flex-col gap-5">
      <header className="h-[10%]">

        <span className="text-[#68D2DF] text-2xl font-bold">
          {`Bem vindo ${nickName}!`}
        </span>

      </header>
      <main className="w-full flex justify-center">

        {newTask && <CreateTask close={ setNewTask } />}

        <div
          className="h-[72vh] overflow-auto flex flex-col gap-2"
        >
          {userTasks.tasks ? (
            userTasks.tasks.map((task) => (
              <div
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
              </div>))
          ) : (
            <h2>Não há Tarefas para serem feitas.</h2>
          )}
        </div>

        {!newTask && (
          <button
            className="absolute bottom-5 border-2 w-10 h-10 rounded-full text-4xl
            flex items-center justify-center pb-1"
            onClick={ () => setNewTask(!newTask) }
          >
            +
          </button>
        )}

      </main>
    </div>
  );
}

export default TasksRoute;
