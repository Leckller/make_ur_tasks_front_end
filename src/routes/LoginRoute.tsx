import { useEffect, useState } from 'react';
import Form from '../components/Form';
import image from '../public/makeUrTasks.png';

function LoginRoute() {
  const [popup, setPopup] = useState({ cadastro: false, login: false });
  const [inputs, setInputs] = useState({ cadastro: { email: '', password: '' },
    login: { email: '', password: '' } });

  useEffect(() => {
    const effect = async () => {
      const request = await fetch('http://localhost:6969/users', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({

        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = await request.json();
      console.log(response);
    };
    effect();
  }, []);
  const handleInput = (
    type: string,
    field: 'email' | 'password' | 'nickName',
    value: string,
  ) => {
    setInputs({ [type]: { [field]: value }, ...inputs });
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
          >
            LOGIN
          </button>
          <span
            className="w-40 text-center font-extralight"
          >
            Não possui uma conta?
          </span>
          <button
            className="bg-black font-light var w-40 rounded-2xl p-1
            shadow-2xl shadow-[#1B2836]"
          >
            CADASTRAR
          </button>
        </div>
        {popup.login && <Form handleInput={ handleInput } name="login" />}
        {popup.cadastro && <Form handleInput={ handleInput } name="cadastro" />}
      </main>

      <footer className="w-full h-[5%]">
        Created By Ruy
      </footer>
    </div>
  );
}

export default LoginRoute;
