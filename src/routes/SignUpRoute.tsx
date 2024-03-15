import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { cadastro } from '../service/fetch';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';

function SignUpRoute() {
  const [body, setBody] = useState({ email: '', password: '', nickName: '' });
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const sendCadastro = async () => {
    const request = await cadastro(body);

    Swal.fire(request.message);

    if (request.token) {
      setToken(request.token);
      return navigate('/tasks');
    }

    return console.log(`Ocorreu algum erro${request}`);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#11111F]">
      <header className="w-full h-[10%] p-6">
        <span className="text-2xl text-white">
          The First Step To Victory.
        </span>
      </header>
      <main className="h-[85%] w-full flex flex-col justify-center">
        <button
          className="bg-black font-light var w-20 rounded-2xl m-5 text-white"
          onClick={ () => navigate(-1) }
        >
          Voltar
        </button>
        <form
          onSubmit={ (e) => e.preventDefault() }
          className="flex flex-col w-full items-center gap-5"
        >

          <label className="flex flex-col text-white">
            <span>Email</span>
            <input
              onChange={ ({ target }) => setBody({
                ...body, [target.name]: target.value }) }
              name="email"
              className="outline-none w-40 rounded-lg text-[#11111F] pl-2"
              type="text"
            />
          </label>

          <label className="flex flex-col text-white">
            <span>Password</span>
            <input
              onChange={ ({ target }) => setBody({
                ...body, [target.name]: target.value }) }
              name="password"
              className="outline-none w-40 rounded-lg text-[#11111F] pl-2"
              type="password"
            />
          </label>

          <label className="flex flex-col text-white">
            <span>nickName</span>
            <input
              onChange={ ({ target }) => setBody({
                ...body, [target.name]: target.value }) }
              name="nickName"
              className="outline-none w-40 rounded-lg text-[#11111F] pl-2"
              type="text"
            />
          </label>

          <button
            onClick={ () => sendCadastro() }
            type="submit"
            className="bg-black font-light var w-40 rounded-2xl p-1 text-white"
          >
            Sign Up
          </button>

        </form>
      </main>

      <Footer />

    </div>
  );
}

export default SignUpRoute;
