<template>

  <main>
    <form id="task-form">
      <label for="task">Task:</label>
      <input type="text" id="task" name="task" required>
      <button type="submit">Add Task</button>
    </form>
    <section>

      <TaskDetails
        v-for="task
        in tasks"
        :key="task.id"
        :task="task"
        @change="changeTask"
        @remove="removeTask"
      />

    </section>
  </main>

</template>

<script>
import TaskDetails from './TaskDetails.vue'

export default {
  name: 'TaskForm',
  components: {
    TaskDetails
  },
  data () {
    return {
      tasks: [
        { id: 1, text: 'Learn Vue.js', finished: true },
        { id: 2, text: 'Learn React', finished: false },
        { id: 3, text: 'Learn Angular', finished: false }
      ]
    }
  },
  methods: {
    addTask (event) {
      event.preventDefault()
      const taskInput = document.getElementById('task')
      const task = {
        id: this.tasks.length + 1,
        text: taskInput.value,
        finished: false
      }
      this.tasks.push(task)
      taskInput.value = ''
    },
    changeTask (id, finished) {
      const task = this.tasks.find(task => task.id === id)
      task.finished = finished
    },
    removeTask (id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }
}

</script>
