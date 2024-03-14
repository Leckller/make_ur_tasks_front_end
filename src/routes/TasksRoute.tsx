import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import CreateTask from '../components/CreateTask';
import { allTasks } from '../service/fetch';
import HeaderTask from '../components/HeaderTask';
import ListTask from '../components/ListTask';

function TasksRoute() {
  const [newTask, setNewTask] = useState(false);
  const navigate = useNavigate();
  const { token, setUserTasks, reload } = useContext(AppContext);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
    setTimeout(() => {
      allTasks(token).then((request) => {
        setUserTasks(request);
      });
    }, 1000);
  }, [reload]);

  return (
    <div className="h-screen w-screen p-5 flex flex-col gap-5">
      <HeaderTask />

      <main className="w-full flex justify-center">

        {newTask && <CreateTask close={ setNewTask } />}

        <ListTask />

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
