<template>
    <form id="login-form">
      <label for="login-username">Username:</label>
      <input v-model="username" type="username" id="login-username" autocomplete="username"  name="login-username" required>

      <label for="login-password">Password:</label>
      <input v-model="password" type="password" id="login-password" name="login-password" autocomplete="current-password" required>

      <button :disabled="!(username || password.length >= 8)" @click="login" type="submit">Login</button>
    </form>
</template>

<script>
import router from '@/router'
import UserService from '@/service/User.service'

export default {
  name: 'LoginForm',
  data () {
    return {
      username: null,
      password: ''
    }
  },
  methods: {
    async login (e) {
      e.preventDefault()
      try {
        const response = await UserService.login({ username: this.username, password: this.password })
        router.push({ name: 'HomeView' })
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>

#login-form {
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 300px;
  border-radius: 16px;
  background-color: blue;
}

</style>
