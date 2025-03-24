<template>
  <form @click="$emit('changeFocus', true)" id="register-form" :class="show ? 'visible' : 'invisible'">
    <section id="inputs">
      <label for="name">Name:</label>
      <input v-model="name" type="text" id="name" name="name" required>

      <label for="username">Username:</label>
      <input autocomplete="username" v-model="username" type="text" id="username" name="username" required>

      <label for="email">Email:</label>
      <input autocomplete="email" v-model="email" type="email" id="email" name="email" required>

      <label for="password">Password:</label>
      <input autocomplete="current-password" v-model="password" type="password" id="password" name="password" required>
    </section>

    <button :disabled="!(name && username && email && password.length >= 8)" @click="submit" type="submit">Register</button>
  </form>
</template>

<script>
import router from '@/router'
import UserService from '@/service/User.service'

export default {
  name: 'RegisterForm',
  props: {
    show: Boolean
  },
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
        await UserService.createUser({
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password
        })
        router.push('/')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

  #inputs {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .visible {
    position: absolute;
    z-index: 1000;
    background-color: #CC2936;
  }

  .invisible {
    z-index: 1;
    background-color: #08415C;
    transform: translate(-50px, -50px);
    cursor: pointer;
  }

  #register-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 500px;
    width: 80%;
    border-radius: 16px;
    padding: 50px;
    height: 80%;
    max-height: 500px;
    font-weight: bold;
    font-size: 1.5rem;
    transition: all 1s;
  }

  label, input {
    width: 100%;
  }

  button, input {
    background-color: #388697;
  }

  button {
    border-radius: 32px;
    padding: 16px;
  }

  button:disabled {
    cursor: not-allowed;
  }

</style>
