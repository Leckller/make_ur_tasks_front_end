import { useState } from 'react';
import AppContext from './AppContext';
import { UserTasksType } from '../type';

function AppProvider({ children }: { children: React.ReactNode }) {
  const [reload, setReload] = useState(false);
  const [nickAndToken, setNickAndToken] = useState({ nickName: '', token: '' });
  const [userTasks, setUserTasks] = useState<UserTasksType>({
    nickName: '',
    email: '',
    id: 0,
    tasks: [],
  });
  const { token, nickName } = nickAndToken;
  const [message, setMessage] = useState('');
  const handlerNat = (field: string, value: string) => {
    setNickAndToken({ ...nickAndToken, [field]: value });
  };

  return (
    <AppContext.Provider
      value={ {
        setReload,
        reload,
        setUserTasks,
        userTasks,
        nickName,
        token,
        handlerNat,
        message,
        setMessage } }
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
