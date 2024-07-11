import { createAsyncThunk } from '@reduxjs/toolkit';
import Server, { DataBase, SignFields, Task } from '../../service/Server';
import { LocalSaves } from '../../components/Classes/Saves';

export default class ServerThunk extends Server {
  cadastroThunk() {
    const fetch = createAsyncThunk('Cadastro', async (fields: SignFields) => {
      const data = await DataBase.cadastro(fields);
      return data;
    });
    return fetch;
  }

  criarTarefaThunk(logado: boolean) {
    const fetch = createAsyncThunk('criar tarefa', async (fields: Task) => {
      if (logado) {
        const data = await DataBase.criarTarefa(fields);
        return data.data;
      }
      return fields;
    });
    return fetch;
  }
}

export const DatabaseThunk = new ServerThunk(LocalSaves.localGet('User').token);
