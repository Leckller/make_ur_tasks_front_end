import { createContext } from 'react';
import { UserTasksType } from '../type';

type AppType = {
  token: string
  setToken: (token: string) => void,
  setUserTasks: (user: UserTasksType) => void
  userTasks: UserTasksType,
  reload: boolean,
  setReload: (boleano:boolean) => void
};

const AppContext = createContext({} as AppType);

export default AppContext;
