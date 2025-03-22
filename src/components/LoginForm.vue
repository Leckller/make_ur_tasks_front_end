<template>
    <form id="login-form">
      <label for="login-email">Email:</label>
      <input type="email" id="login-email" autocomplete="email"  name="login-email" required>

      <label for="login-password">Password:</label>
      <input type="password" id="login-password" name="login-password" autocomplete="current-password" required>

      <button type="submit">Login</button>
    </form>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>

#login-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: blue;
}

</style>
