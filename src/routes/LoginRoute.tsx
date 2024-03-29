import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../service/useLogin';

function LoginRoute() {
  const navigate = useNavigate();
  const { effect } = useLogin();
  const [body, setBody] = useState({ email: '', password: '' });
  return (
    <div className="h-screen w-screen flex flex-col bg-[#11111F]">

      <header className="w-full h-[10%] p-6">
        <span className="text-2xl text-white">
          The Second Step To Victory Is Persistence.
        </span>
      </header>

      <main className="h-[85%] relative w-full flex flex-col justify-center">
        <button
          className="bg-black font-light var w-20 rounded-2xl m-5 text-white"
          onClick={ () => navigate(-1) }
        >
          Voltar
        </button>

        <form
          onSubmit={ (e) => e.preventDefault() }
          className="flex flex-col w-full items-center gap-10"
        >

          <label className="flex flex-col text-white">
            <span>Email</span>
            <input
              name="email"
              className="outline-none w-40 rounded-lg text-[#11111F] pl-2"
              type="text"
              onChange={ (e) => setBody({ ...body, [e.target.name]: e.target.value }) }
            />
          </label>

          <label className="flex flex-col text-white">
            <span>Password</span>
            <input
              className="outline-none w-40 rounded-lg text-[#11111F] pl-2"
              type="password"
              name="password"
              onChange={ (e) => setBody({ ...body, [e.target.name]: e.target.value }) }
            />
          </label>

          <button
            type="submit"
            onClick={ () => effect(body) }
            className="bg-black font-light var w-40 rounded-2xl p-1 text-white"
          >
            LogIn
          </button>

        </form>
      </main>

      <footer className="w-full text-center">
        <span className="text-white">
          Created by Ruy
        </span>
      </footer>

    </div>
  );
}

export default LoginRoute;
