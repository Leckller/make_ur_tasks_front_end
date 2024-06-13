import { useState } from 'react';
import Popup from '../components/Popup';

function MainRoute() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-screen h-screen flex justify-center">
      MainRoute
      {open && (
        <Popup setOpen={ setOpen }>
          oi
        </Popup>
      )}
      <button onClick={ () => setOpen(!open) }>pseudo task</button>
    </div>
  );
}

export default MainRoute;
