import { DataBase } from '../service/Server';
import { PopupTypes } from '../types';

export default async function
SignUp(fields: { Email: string, pass: string }, type: PopupTypes) {
  const { Email, pass } = fields;
  if (type === 'cadastro') {
    return DataBase.cadastro({ email: Email, password: pass });
  }
  return DataBase.login({ email: Email, password: pass });
}
