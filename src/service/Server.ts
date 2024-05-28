export interface SignFields {
  email: string,
  password: string
}

export interface Checks {
  text: string,
  completed: boolean,
}

export interface Task {
  id: number;
  taskName: string;
  deadline: Date;
  description: string;
  checks: Checks[]
  completed: boolean
  userId: number
}

export type ResponseServer<DataType> = {
  data: DataType,
  message: string
};

export interface ServerMethods {
  cadastro(fields: SignFields): Promise<string>
  login(fields: SignFields): Promise<string>
  criarTarefa(fields: Task): Promise<ResponseServer<boolean>>
  editarTarefa(fields: Task): Promise<ResponseServer<boolean>>
  deletarTarefa(fields: Task): Promise<ResponseServer<boolean>>
  todasTarefas(userId: number): Promise<ResponseServer<Task[]>>
}

export type FetchOptions = {
  method: 'POST' | 'GET' | 'DELETE' | 'UPDATE',
  body: any,
};

export default class Server implements ServerMethods {
  protected static async fetch(url: string, options: FetchOptions)
    : Promise<ResponseServer<any>> {
    const request = await fetch(url, {
      method: options.method,
      mode: 'cors',
      body: JSON.stringify(options.body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await request.json();
    return data;
  }

  async cadastro(fields: SignFields): Promise<string> {
    const url = 'http://localhost:8001/user/cadastro';
  }

  async login(fields: SignFields): Promise<string> {
    const url = 'http://localhost:8001/user/login';
  }

  async criarTarefa(fields: Task): Promise<void> {
    const url = 'http://localhost:8001/task/create';
  }

  async deletarTarefa(fields: Task): Promise<void> {
    const url = 'http://localhost:8001/task/delete';
  }

  async editarTarefa(fields: Task): Promise<void> {
    const url = 'http://localhost:8001/task/edit';
  }

  async todasTarefas(userId: number): Promise<ResponseServer<Task[]>> {
    const url = 'http://localhost:8001/task';
  }
}
