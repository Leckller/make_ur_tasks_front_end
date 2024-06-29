export interface SignFields {
  email: string,
  password: string
}

export interface Checks {
  text: string,
  completed: boolean,
}

export interface Task {
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
  cadastro(fields: SignFields): Promise<ResponseServer<string>>
  login(fields: SignFields): Promise<ResponseServer<string>>
  criarTarefa(fields: Task): Promise<ResponseServer<ResponseServer<boolean>>>
  editarTarefa(fields: Task): Promise<ResponseServer<ResponseServer<boolean>>>
  deletarTarefa(fields: Task): Promise<ResponseServer<ResponseServer<boolean>>>
  todasTarefas(userId: number): Promise<ResponseServer<ResponseServer<Task[]>>>
}

export type FetchOptions = {
  method: 'POST' | 'GET' | 'DELETE' | 'UPDATE',
  body: any,
};

export default class Server implements ServerMethods {
  url = 'http://localhost:8001';

  auth = '';

  protected async fetchServer(url: string, options: FetchOptions)
    : Promise<ResponseServer<any>> {
    const request = await fetch(url, {
      method: options.method,
      mode: 'cors',
      body: JSON.stringify(options.body),
      headers: {
        'Content-Type': 'application/json',
        auth: this.auth,
      },
    });
    const data = await request.json();
    return data;
  }

  constructor(token: string) {
    this.auth = token;
  }

  async cadastro(fields: SignFields): Promise<ResponseServer<string>> {
    const url = `${this.url}/user/cadastro`;
    const data = await this.fetchServer(url, { body: fields, method: 'POST' });
    return data;
  }

  async login(fields: SignFields): Promise<ResponseServer<string>> {
    const url = `${this.url}/user/login`;
    const data = await this.fetchServer(url, { body: fields, method: 'POST' });
    return data;
  }

  async criarTarefa(fields: Task): Promise<ResponseServer<ResponseServer<boolean>>> {
    const url = `${this.url}/task/create`;
    const data = await this.fetchServer(url, { body: fields, method: 'POST' });
    return data;
  }

  async deletarTarefa(fields: Task): Promise<ResponseServer<ResponseServer<boolean>>> {
    const url = `${this.url}/task/delete`;
    const data = await this.fetchServer(url, { body: fields, method: 'DELETE' });
    return data;
  }

  async editarTarefa(fields: Task): Promise<ResponseServer<ResponseServer<boolean>>> {
    const url = `${this.url}/task/edit`;
    const data = await this.fetchServer(url, { body: fields, method: 'UPDATE' });
    return data;
  }

  async todasTarefas(userId: number): Promise<ResponseServer<ResponseServer<Task[]>>> {
    const url = `${this.url}/task`;
    const data = await this.fetchServer(url, { body: { userId }, method: 'GET' });
    return data;
  }
}

const localToken = localStorage.getItem('token');
const token = localToken ? JSON.parse(localToken) : '';

export const DataBase = new Server(token);
