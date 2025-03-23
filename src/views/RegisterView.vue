<template>
  <main>
    <RegisterForm />
    <LoginForm />
  </main>
</template>

<script>

import RegisterForm from '@/components/RegisterForm.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'HomeView',
  components: {
    RegisterForm,
    LoginForm
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