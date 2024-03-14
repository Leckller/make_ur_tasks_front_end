import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const urlBase = 'https://makeurtasksbackend-production.up.railway.app';

function useLogin() {
  const { handlerNat } = useContext(AppContext);
  const navigate = useNavigate();
  const url = `${urlBase}/login`;

  const effect = async (body: { password: string, email: string }) => {
    const request = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body),
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
      navigate('/tasks');
    }
  };

  return { effect };
}

export default useLogin;
