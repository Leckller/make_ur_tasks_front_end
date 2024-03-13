import { createContext } from 'react';

type AppType = {
  token: string
  nickName: string
  handlerNat: (field: string, value: string) => void,
  message: string,
  setMessage: (p: string) => void
};

const AppContext = createContext({} as AppType);

export default AppContext;
