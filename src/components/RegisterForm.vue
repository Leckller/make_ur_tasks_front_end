<template>
  <form id="register-form">
    <label for="name">Name:</label>
    <input v-model="name" type="text" id="name" name="name" required>

    <label for="username">Username:</label>
    <input v-model="username" type="text" id="username" name="username" required>

    <label for="email">Email:</label>
    <input v-model="email" type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input v-model="password" type="password" id="password" name="password" required>
    <button @click="submit" type="submit">Register</button>
  </form>
</template>

<script>
import UserService from '@/service/User.service'

export default {
  name: 'RegisterForm',

  data () {
    return {
      name: 'null',
      username: 'null',
      email: 'null',
      password: 'null'
    }
  },

  methods: {
    async submit (e) {
      e.preventDefault()
      try {
        const createUser = await UserService.createUser({
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password
        })
        const response = await createUser.json()
      } catch (e) {
        alert(e)
      }
    }
  },

  mounted () {
    console.log(this)
  }

}
</script>

<style scoped>

  #register-form {
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: yellow;
  }

</style>
