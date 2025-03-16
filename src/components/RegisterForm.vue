<template>
  <form id="register-form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Register</button>
  </form>
</template>

<script>
export default {
  name: 'RegisterForm'
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
