<template>

  <main id="main-task-form">
    <form id="task-form">
      <label for="task">Task:</label>
      <input minlength="2" v-model="taskInput" type="text" id="task" name="task" required>
      <button @click="addTask($event)" type="submit">Add Task</button>
    </form>
    <section id="tasks-section">

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

<style  scoped>

  #main-task-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  #tasks-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
  }

  #task-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ccc;
    gap: 16px;
    max-width: 350px;
    width: 90%;
  }

  #task-form button {
    background-color: #0f0;
    color: #fff;
    border: none;
    padding: .5rem 1rem;
    cursor: pointer;
    transition: all .3s;
  }

  #task-form button:hover {
    background-color: #0f5;
    transform: scale(1.05);
  }

  #task-form input {
    max-width: 200px;
  }

  @media (max-width: 350px) {
    #task-form {
      flex-wrap: wrap;
    }
    #task-form input {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }


</style>
