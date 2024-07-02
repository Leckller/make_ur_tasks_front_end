import { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setUser } from '../../redux/Reducers/User';
import { DataBase } from '../../service/Server';

function Login() {
  const dispatch = useAppDispatch();
  const [pass, setPass] = useState('');
  const [Email, setEmail] = useState('');
  return (
    <form
      onSubmit={ (e) => e.preventDefault() }
      className="flex justify-center flex-col gap-5"
    >
      <label>
        Name
        <input type="text" onChange={ ({ target: { value } }) => setEmail(value) } />
      </label>
      <label>
        Password
        <input type="password" onChange={ ({ target: { value } }) => setPass(value) } />
      </label>
      <button
        onClick={ () => {
          DataBase.cadastro({ email: Email, password: pass })
            .then((r) => {
              dispatch(setUser(r.data));
              console.log(r);
            });
        } }
      >
        login / cadastro
      </button>
    </form>
  );
}

export default Login;
