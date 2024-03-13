export type UserTasksType = {
  email: string,
  id: number,
  nickName: string,
  tasks: {
    id: number
    taskName: string,
    deadline: Date,
    description: string,
    completed: boolean
  }[]
};
