import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setUser } from '../../redux/Reducers/User';
import SignUp from '../../utils/SingUp';
import { openEdit } from '../../redux/Reducers/Tasks';

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
          SignUp({ Email, pass }, type).then((response) => {
            dispatch(setUser(response.data));
            dispatch(openEdit({ bool: 0, type: 'view' }));
          });
        } }
      >
        {type === 'login' ? 'login' : 'cadastro'}
      </button>
    </form>
  );
}

export default Login;
