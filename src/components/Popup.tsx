import { ReactNode } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { openEdit } from '../redux/Reducers/Tasks';

function Popup({ children, title }: { children: ReactNode, title: string }) {
  const dispatch = useAppDispatch();
  return (
    <div
      className="
      absolute bg-slate-800 w-[80%] h-[80%] mt-[50px]
      rounded-xl p-5 flex flex-col gap-5
      "
    >
      <header className="flex flex-row justify-between">
        <h2 className="text-xl">{title}</h2>
        <button
          className="text-2xl"
          onClick={ () => dispatch(openEdit()) }
        >
          X
        </button>
      </header>
      {children}
    </div>
  );
}

export default Popup;
