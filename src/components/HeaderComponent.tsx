import { IoMdAdd } from 'react-icons/io';
import { GrConfigure } from 'react-icons/gr';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { makeTask, openEdit } from '../redux/Reducers/Tasks';
import { DatabaseThunk } from '../redux/Reducers/Server';

function HeaderComponent() {
  const dispatch = useAppDispatch();
  const [clicked, setClicked] = useState(false);
  const { token } = useAppSelector((s) => s.User);
  return (
    <header
      className="flex flex-row items-center justify-between w-full h-[10%]
    text-center p-2"
    >
      <h1 className="font-bold text-2xl">
        Make Ur Tasks!
      </h1>
      <section className="flex flex-row gap-5">
        {(token.length > 20 && !clicked) ? (
          <button
            onClick={ () => {
              setClicked(true);
              setTimeout(() => {
                setClicked(false);
              }, 5000);
              dispatch(DatabaseThunk.todasTarefasThunk(token.length > 20)());
            } }
          >
            sincronizar com banco de dados
          </button>
        ) : (
          <h2>tarefas sincronizadas!</h2>
        )}
        <IoMdAdd
          className="w-10 h-10 border rounded-full p-2"
          onClick={ () => {
            dispatch(makeTask({ field: 'taskName', value: 'Nova Tarefa' }));
            dispatch(openEdit({ bool: 1, type: 'add' }));
          } }
        />
        <GrConfigure
          className="w-10 h-10 border rounded-full p-2"
          onClick={ () => {
            dispatch(makeTask({ field: 'taskName', value: 'Configurações' }));
            dispatch(openEdit({ bool: 1, type: 'config' }));
          } }
        />
      </section>
    </header>
  );
}

export default HeaderComponent;
