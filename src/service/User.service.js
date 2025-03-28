import VariablesService from './Variables.service'
import ValidateStatus from '@/utils/ValidateStatus'

export default class UserService {
  // Post -> /user
/*
    {
        "name": "Kayo",
        "username": "kayoMacedo",
        "email": "kayo@gmail.com",
        "password": "playboiCartiFrances"
    }
*/
  static async createUser (body) {
    const req = await fetch(`${VariablesService.baseUrl}/user`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(body)
    })

    const response = await req.json()

    // Validations
    if (ValidateStatus.validateStatus(req.status, response)) return

    localStorage.setItem('authToken', response.token)

    return response
  };

  // Post -> /auth/login
  /*
    {
        "username": "umCaraLegal",
        "password": "umaSenhaDificil!"
    }
  */
  static async login (body) {
    const req = await fetch(`${VariablesService.baseUrl}/auth/login`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(body)
    })

    const response = await req.json()

    // Validations
    if (ValidateStatus.validateStatus(req.status, response)) return

    localStorage.setItem('authToken', response.token)

    return response
  }
}
