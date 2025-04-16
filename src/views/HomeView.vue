<template>
  <main id="main-task-form">
    <TaskForm />
  </main>
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

<style scoped>
  #main-task-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
</style>
