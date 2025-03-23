<template>
  <form id="register-form">
    <label for="name">Name:</label>
    <input v-model="name" type="text" id="name" name="name" required>

    <label for="username">Username:</label>
    <input autocomplete="username" v-model="username" type="text" id="username" name="username" required>

    <label for="email">Email:</label>
    <input autocomplete="email" v-model="email" type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input autocomplete="current-password" v-model="password" type="password" id="password" name="password" required>

    <button :disabled="!(name && username && email && password.length >= 8)" @click="submit" type="submit">Register</button>
  </form>
</template>

<script>
import UserService from '@/service/User.service'

export default {
  name: 'RegisterForm',

  data () {
    return {
      name: null,
      username: null,
      email: null,
      password: ''
    }
  },

  methods: {
    async submit (e) {
      e.preventDefault()
      try {
        const response = await UserService.createUser({
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password
        })
        localStorage.setItem('authToken', response.token)
        console.log(createUser)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

  #register-form {
    display: flex;
    flex-direction: column;
    width: 300px;
    border-radius: 16px;
    padding: 50px;
    background-color: yellow;
  }

  button:disabled {
    cursor: not-allowed;
  }

</style>
