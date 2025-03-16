<template>

  <main>
    <form id="task-form">
      <label for="task">Task:</label>
      <input minlength="2" v-model="taskInput" type="text" id="task" name="task" required>
      <button @click="addTask($event)" type="submit">Add Task</button>
    </form>
    <section>

      <TaskDetails
        v-for="task
        in tasks"
        :key="task.id"
        :task="task"
        @change-task="changeTask"
        @remove-task="removeTask"
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
      taskInput: null,
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
      const task = {
        id: this.tasks.length + 1,
        text: this.taskInput,
        finished: false
      }
      this.tasks.push(task)
      this.taskInput = ''
    },
    changeTask (id) {
      const task = this.tasks.find(task => task.id === id)
      console.log('changeTask', id, task.finished)
      task.finished = !task.finished
    },
    removeTask (id) {
      console.log('removeTask', id)
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }
}

</script>
