import { IoMdAdd } from 'react-icons/io';
import { GrConfigure } from 'react-icons/gr';
import { useAppDispatch } from '../hooks/reduxHooks';
import { openEdit } from '../redux/Reducers/Tasks';

function HeaderComponent() {
  const dispatch = useAppDispatch();

  return (
    <header className="flex flex-row items-center justify-between w-full h-[10%] p-2">
      <h1 className="font-bold text-2xl">
        Make Ur Tasks!
      </h1>
      <section className="flex flex-row gap-5">
        <IoMdAdd
          className="w-10 h-10 border rounded-full p-2"
          onClick={ () => dispatch(openEdit({ bool: 1, type: 'add' })) }
        />
        <GrConfigure
          className="w-10 h-10 border rounded-full p-2"
          onClick={ () => dispatch(openEdit({ bool: 1, type: 'config' })) }
        />
      </section>
    </header>
  );
}

export default HeaderComponent;
