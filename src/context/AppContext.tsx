import { createContext } from 'react';
import { UserTasksType } from '../type';

type AppType = {
  token: string
  nickName: string
  handlerNat: (field: string, value: string) => void,
  message: string,
  setMessage: (p: string) => void
  setUserTasks: (p: UserTasksType) => void
  userTasks: UserTasksType,
  reload: boolean,
  setReload: (p:boolean) => void
};

const AppContext = createContext({} as AppType);

export default AppContext;
