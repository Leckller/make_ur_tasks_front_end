import { createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import Server, { DataBase, SignFields, Task } from '../../service/Server';
import { LocalSaves } from '../../components/Classes/Saves';

export default class ServerThunk extends Server {
  cadastroThunk() {
    const fetch = createAsyncThunk('Cadastro', async (fields: SignFields) => {
      const data = await DataBase.cadastro(fields);
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return data.data;
    });
    return fetch;
  }

  loginThunk() {
    const fetch = createAsyncThunk('Logar', async (fields: SignFields) => {
      const data = await DataBase.login(fields);
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return data.data;
    });
    return fetch;
  }

  criarTarefaThunk(logado: boolean) {
    const fetch = createAsyncThunk('Criar tarefa', async (fields: Task) => {
      if (logado) {
        const data = await DataBase.criarTarefa(fields);
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        return data.data;
      }
      return fields;
    });
    return fetch;
  }

  deletarTarefaThunk(logado: boolean) {
    const fetch = createAsyncThunk('Deletar tarefa', async (taskId: number) => {
      if (logado) {
        const data = await DataBase.deletarTarefa(taskId);
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        return taskId;
      }
      return taskId;
    });
    return fetch;
  }

  todasTarefasThunk(logado: boolean) {
    const fetch = createAsyncThunk('Get todas tarefas', async () => {
      if (logado) {
        const data = await DataBase.todasTarefas();
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'Tarefas sincronizadas',
          showConfirmButton: false,
          timer: 1500,
        });
        return data.data;
      }
      return [];
    });
    return fetch;
  }

  editarTarefaThunk(logado: boolean) {
    const fetch = createAsyncThunk('Editar Tarefa', async (fields: Task) => {
      if (logado) {
        const data = await super.editarTarefa(fields);
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        return data.data;
      }
      return [];
    });
    return fetch;
  }

  alternarTarefaThunk(logado: boolean) {
    const fetch = createAsyncThunk('Alternar Tarefa', async (fields: Task) => {
      if (logado) {
        const data = await super.editarTarefa(fields);
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: `Tarefa marcada como:
           ${fields.completed ? 'Concluída' : 'Não concluída'}`,
          showConfirmButton: false,
          timer: 1500,
        });
        return data.data;
      }
      return [];
    });
    return fetch;
  }
}

export const DatabaseThunk = new ServerThunk(LocalSaves.localGet('User')?.token);
