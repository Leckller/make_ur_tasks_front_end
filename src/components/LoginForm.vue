<template>
    <form id="login-form">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
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
