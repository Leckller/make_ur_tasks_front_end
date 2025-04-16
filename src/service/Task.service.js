import ValidateStatus from '@/utils/ValidateStatus'
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
    const authToken = localStorage.getItem('authToken')

    const req = await fetch(`${VariablesService.baseUrl}/task`, {
      headers: { 'Content-Type': 'application/json', Authorization: authToken },
      method: 'POST',
      body: JSON.stringify(body)
    })

    const response = await req.json()

    // Validations
    if (ValidateStatus.validateStatus(req.status, response)) return

    return response
  }

  // Get - /task || /task?
  static async getTasks () {
    const authToken = localStorage.getItem('authToken')

    const req = await fetch(`${VariablesService.baseUrl}/task`, {
      headers: { 'Content-Type': 'application/json', Authorization: authToken }
    })

    const response = await req.json()

    // Validations
    if (ValidateStatus.validateStatus(req.status, response)) return

    return response
  }

  // Delete - /task/id
  static async deleteTask (id) {
    const authToken = localStorage.getItem('authToken')

    await fetch(`${VariablesService.baseUrl}/task/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: authToken }
    })
  }

  // Patch - /task/id
  static async toggleTask (id) {
    const authToken = localStorage.getItem('authToken')

    const req = await fetch(`${VariablesService.baseUrl}/task/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: authToken }
    })

    const response = await req.json()

    // Validations
    if (ValidateStatus.validateStatus(req.status, response)) return

    return response
  }
}
