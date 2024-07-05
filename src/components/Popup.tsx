import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { openEdit, resetCooking } from '../redux/Reducers/Tasks';

function Popup({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const { taskName } = useAppSelector((state) => state.Task.coockingTask);
  return (
    <div
      className="
      absolute bg-slate-800 w-[80%] h-[80%] mt-[50px]
      rounded-xl p-5 flex flex-col gap-5
      "
    >
      <header className="flex flex-row justify-between">

        <h2 className="text-2xl text-white font-bold">
          {taskName}
        </h2>
        <button
          className="text-2xl"
          onClick={ () => {
            dispatch(openEdit({ bool: 0, type: 'view' }));
            dispatch(resetCooking());
          } }
        >
          X
        </button>
      </header>

      {children}

    </div>
  );
}

export default Popup;
