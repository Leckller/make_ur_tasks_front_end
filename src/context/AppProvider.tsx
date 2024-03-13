import { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }: { children: React.ReactNode }) {
  const [nickAndToken, setNickAndToken] = useState({ nickName: '', token: '' });
  const { token, nickName } = nickAndToken;
  const [message, setMessage] = useState('');
  const handlerNat = (field: string, value: string) => {
    setNickAndToken({ ...nickAndToken, [field]: value });
  };

  return (
    <AppContext.Provider value={ { nickName, token, handlerNat, message, setMessage } }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
