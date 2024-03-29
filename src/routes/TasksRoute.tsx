import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useTasks from '../service/useTasks';
import CreateTask from '../components/CreateTask';

function TasksRoute() {
  const navigate = useNavigate();
  const { effect } = useTasks();

  const [newTask, setNewTask] = useState(false);

  const { nickName, token,
    setReload, setUserTasks, userTasks, reload } = useContext(AppContext);

  if (!token) {
    navigate('/');
  }

  useEffect(() => {
    const eff = async () => {
      const [resp] = await effect({}, 'GET');
      setUserTasks(resp);
    };
    setTimeout(() => {
      eff();
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
                        effect({ id: task.id }, 'DELETE');
                        setReload(!reload);
                      } }
                    >
                      X
                    </button>
                    <button
                      className={ `w-5 h-5 rounded-full border flex
                      justify-center items-center` }
                      onClick={ () => {
                        effect({ completed: !task.completed, id: task.id }, 'PATCH');
                        setReload(!reload);
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
