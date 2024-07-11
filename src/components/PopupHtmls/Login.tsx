import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { openEdit } from '../../redux/Reducers/Tasks';
import { DatabaseThunk } from '../../redux/Reducers/Server';

function Login() {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector((s) => s.Task.edit);
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  return (
    <form
      onSubmit={ (e) => e.preventDefault() }
      className="flex justify-center flex-col gap-5"
    >
      <label>
        <h2>Email</h2>
        <input
          value={ email }
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
          if (type === 'login') {
            dispatch(DatabaseThunk.loginThunk()({ email, password: pass }));
          } else {
            dispatch(DatabaseThunk.cadastroThunk()({ email, password: pass }));
          }
          dispatch(openEdit({ bool: 0, type: 'view' }));
        } }
      >
        {type === 'login' ? 'login' : 'cadastro'}
      </button>
    </form>
  );
}

export default Login;
