import { useState } from 'react';
import AppContext from './AppContext';
import { UserTasksType } from '../type';

function AppProvider({ children }: { children: React.ReactNode }) {
  const [reload, setReload] = useState(false);
  const [token, setToken] = useState('');
  const [userTasks, setUserTasks] = useState<UserTasksType>({
    nickName: '',
    email: '',
    id: 0,
    tasks: [],
  });
  return (
    <AppContext.Provider
      value={ {
        setReload,
        reload,
        setUserTasks,
        userTasks,
        token,
        setToken } }
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
