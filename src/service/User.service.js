import VariablesService from './Variables.service'

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
      body: JSON.parse(body)
    })
    alert(req)
    return await req.json()
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
      body
    })
    return await req.json()
  }
}
