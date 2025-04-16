<template>
  <main>
    <RegisterForm @changeFocus="changeFocus" :show="show" />
    <LoginForm @changeFocus="changeFocus" :show="show" />
  </main>
</template>

<script>

import RegisterForm from '@/components/RegisterForm.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      show: true
    }
  },
  components: {
    RegisterForm,
    LoginForm
  },
  methods: {
    changeFocus (bool) {
      this.show = bool
    }
  }
}

</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
