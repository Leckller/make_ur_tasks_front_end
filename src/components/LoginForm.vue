<template>
    <form @click="$emit('changeFocus', false)" :class="show ? 'invisible' : 'visible'" id="login-form">
      <section id="inputs">
        <label for="login-username">Username:</label>
        <input v-model="username" type="username" id="login-username" autocomplete="username"  name="login-username" required>

        <label for="login-password">Password:</label>
        <input v-model="password" type="password" id="login-password" name="login-password" autocomplete="current-password" required>
      </section>

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
  props: {
    show: Boolean
  },
  methods: {
    async login (e) {
      e.preventDefault()
      try {
        await UserService.login({ username: this.username, password: this.password })
        router.push('/')
      } catch (error) {
        console.error(error)
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
      background-color: #388697;
      z-index: 1000;
    }

  .invisible {
    z-index: 1;
    background-color: #08415C;
    transform: translate(-50px, -50px);
    cursor: pointer;
  }

  label, input {
    width: 100%;
  }

  button, input {
    background-color: #CC2936;
  }

  button {
    border-radius: 32px;
    padding: 16px;
  }

  #login-form {
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

</style>
