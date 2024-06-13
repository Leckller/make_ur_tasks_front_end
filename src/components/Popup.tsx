import { ReactNode } from 'react';

function Popup({ children, setOpen }:
{ children: ReactNode, setOpen: (p: boolean) => void }) {
  return (
    <div className="absolute bg-slate-800 w-[80%] h-[80%] mt-[5%]">
      <header>
        <button onClick={ () => setOpen(false) }>X</button>
      </header>
      {children}
    </div>
  );
}

export default Popup;
