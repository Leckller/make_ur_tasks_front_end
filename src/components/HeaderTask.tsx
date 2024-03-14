import { useContext } from 'react';
import AppContext from '../context/AppContext';

function HeaderTask() {
  const { nickName } = useContext(AppContext);
  return (
    <header className="h-[10%]">

      <span className="text-[#68D2DF] text-2xl font-bold">
        {`Bem vindo ${nickName}!`}
      </span>

    </header>
  );
}

export default HeaderTask;
