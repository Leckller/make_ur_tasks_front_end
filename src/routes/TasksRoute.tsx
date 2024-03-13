import { useContext } from 'react';
import AppContext from '../context/AppContext';

function TasksRoute() {
  const { nickName, token } = useContext(AppContext);
  return (
    <div className="bg-[#C6CBC9]">
      <header>
        {`Bem vindo ${nickName}!`}
      </header>
      <main>
        tasks
      </main>
    </div>
  );
}

export default TasksRoute;
