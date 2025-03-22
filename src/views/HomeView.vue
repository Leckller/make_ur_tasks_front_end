<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/profile">Profile</router-link>
  </nav>
  <TaskForm />
</template>

<script>
import TaskForm from '@/components/TaskForm.vue'

export default {
  name: 'HomeView',
  components: {
    TaskForm
  }
}

</script>
