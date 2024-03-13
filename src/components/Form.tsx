import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

function Form({ setPopUp, name }: { name: string, setPopUp: (p: string) => void }) {
  const [inputs, setInputs] = useState({ email: '', password: '', nickName: '' });
  const { handlerNat } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const url = `http://localhost:6969/${name === 'login' ? 'login' : 'users'}`;
    console.log(url);
    const request = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(inputs),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await request.json();
    if (response.message) {
      // eslint-disable-next-line no-alert
      alert(response.message);
    }
    if (response.token) {
      handlerNat('token', response.token);
      handlerNat('nickName', inputs.nickName);
      navigate('/tasks');
    }
  };

  return (
    <div
      className="absolute bg-[#68D2DF] w-[70%] h-[70%] flex flex-col justify-center
      gap-5 rounded-lg text-white items-center md:w-[300px] md:h-[80%]"
      onSubmit={ (e) => e.preventDefault() }
    >
      <button
        onClick={ () => setPopUp(name) }
        className="absolute top-3 left-5"
      >
        Voltar
      </button>
      <label className="flex flex-col">
        <span>Email</span>
        <input
          required
          className="outline-none w-40 rounded-lg text-[#11111F] pl-2"
          type="text"
          name="email"
          onChange={ (e) => setInputs({ ...inputs, [e.target.name]: e.target.value }) }
        />
      </label>
      <label className="flex flex-col">
        <span>Password</span>
        <input
          required
          className="outline-none w-40 rounded-lg text-[#11111F] pl-2"
          type="password"
          name="password"
          onChange={ (e) => setInputs({ ...inputs, [e.target.name]: e.target.value }) }
        />
      </label>
      {name === 'cadastro' && (
        <label className="flex flex-col">
          <span>User Name</span>
          <input
            required
            className="outline-none w-40 rounded-lg text-[#11111F] pl-2"
            type="text"
            name="nickName"
            onChange={ (e) => setInputs({ ...inputs, [e.target.name]: e.target.value }) }
          />
        </label>
      )}
      <button
        onClick={ (e) => {
          e.preventDefault();
          handleSubmit(e);
        } }
        className="bg-[#11111F] w-40 rounded-lg"
      >
        {name === 'login' ? 'LOG IN' : 'SIGN UP'}
      </button>
    </div>
  );
}

export default Form;
