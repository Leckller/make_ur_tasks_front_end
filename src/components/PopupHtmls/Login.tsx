import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setUser } from '../../redux/Reducers/User';
import { DataBase } from '../../service/Server';

function Login() {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector((s) => s.Task.edit);
  const [pass, setPass] = useState('');
  const [Email, setEmail] = useState('');
  return (
    <form
      onSubmit={ (e) => e.preventDefault() }
      className="flex justify-center flex-col gap-5"
    >
      <label>
        <h2>Email</h2>
        <input
          value={ Email }
          type="text"
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      </label>

      <label>
        <h2>Password</h2>
        <input
          value={ pass }
          type="password"
          onChange={ ({ target: { value } }) => setPass(value) }
        />
      </label>

      <button
        onClick={ () => {
          if (type === 'cadastro') {
            DataBase.cadastro({ email: Email, password: pass })
              .then((r) => {
                dispatch(setUser(r.data));
                console.log(r);
              });
          } else {
            DataBase.login({ email: Email, password: pass })
              .then((r) => {
                dispatch(setUser(r.data));
                console.log(r);
              });
          }
        } }
      >
        {type === 'login' ? 'login' : 'cadastro'}
      </button>
    </form>
  );
}

export default Login;
