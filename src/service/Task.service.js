import VariablesService from './Variables.service'

export default class TaskService {
  // Post - /task
  /* Example
  {
    "name": "Kayo",
    "username": "kayoMacedo",
    "email": "kayo@gmail.com",
    "password": "playboiCartiFrances"
  }
  */
  static async createTask (body) {
    const req = await fetch(`${VariablesService.baseUrl}/task`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body
    })
    return await req.json()
  }

  // Get - /task || /task?
  static async getTasks () {
    const req = await fetch(`${VariablesService.baseUrl}/task`, {
      headers: { 'Content-Type': 'application/json' }
    })
    return await req.json()
  }
}
