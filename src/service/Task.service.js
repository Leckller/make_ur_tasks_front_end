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
    const req = await fetch(`${VariablesService.baseUrl}/task`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body
    })

    const response = await req.json()

    // Validations
    const validation = ValidateStatus.validateStatus(req.status, response)

    if (validation) {
      return
    }

    return response
  }

  // Get - /task || /task?
  static async getTasks () {
    const req = await fetch(`${VariablesService.baseUrl}/task`, {
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await req.json()

    // Validations
    const validation = ValidateStatus.validateStatus(req.status, response)

    if (validation) {
      return
    }

    return response
  }
}
