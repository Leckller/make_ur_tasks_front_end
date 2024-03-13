import { useState } from 'react';
import Form from '../components/Form';
import image from '../public/makeUrTasks.png';

function LoginRoute() {
  const [popup, setPopup] = useState<{ cadastro: boolean, login: boolean }>(
    { cadastro: false, login: false },
  );
  const handlePopUp = (field: string) => {
    setPopup({ ...popup, [field]: field === 'login' ? !popup.login : !popup.cadastro });
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#11111F]">

      <header className="w-full h-[10%]">
        <div className="flex flex-col m-6 font-semibold">
          <span className="text-2xl text-white">Be Organized.</span>
          <span className="text-[#68D2DF] text-xl">Start Now.</span>
        </div>
      </header>

      <main className="relative w-full h-[85%] flex flex-col justify-center items-center">
        <img src={ image } alt="logo" />
        <div
          className="h-[30%] justify-center text-white flex items-center flex-col gap-3"
        >
          <button
            className="bg-black font-light var w-40 rounded-2xl p-1
            shadow-2xl shadow-[#1B2836]"
            onClick={ () => setPopup({ ...popup, login: !popup.login }) }
          >
            LOG IN
          </button>
          <span
            className="w-40 text-center font-extralight"
          >
            {'Don\'t have an account?'}
          </span>
          <button
            className="bg-black font-light var w-40 rounded-2xl p-1
            shadow-2xl shadow-[#1B2836]"
            onClick={ () => setPopup({ ...popup, cadastro: !popup.cadastro }) }
          >
            SING UP
          </button>
        </div>
        {popup.login && <Form
          setPopUp={ handlePopUp }
          name="login"
        />}
        {popup.cadastro && <Form
          setPopUp={ handlePopUp }
          name="cadastro"
        />}
      </main>

      <footer className="w-full h-[5%]">
        Created By Ruy
      </footer>
    </div>
  );
}

export default LoginRoute;
