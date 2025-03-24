<template>

  <form id="task-form">
    <textarea maxlength="250" minlength="2" v-model="taskInput" placeholder="Digite um nome para a sua tarefa!" type="text" id="task" name="task" required />
    <button id="createTaskButton" :disabled="!(taskInput.length >= 2)" @click="addTask($event)" type="submit">Adicionar tarefa</button>
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

</template>

<script>
import TaskService from '@/service/Task.service'
import TaskDetails from './TaskDetails.vue'
import ValidateStatus from '@/utils/ValidateStatus'

export default {
  name: 'TaskForm',
  components: {
    TaskDetails
  },
  data () {
    return {
      taskInput: '',
      tasks: []
    }
  },
  methods: {
    async addTask (event) {
      event.preventDefault()
      try {
        const response = await TaskService.createTask({ title: this.taskInput })
        this.tasks.unshift(response)
        this.taskInput = ''
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    },
    async changeTask (event, id) {
      event.preventDefault()
      try {
        const response = await TaskService.toggleTask(id)
        const task = this.tasks.find(task => task.id === id)
        task.finished = !task.finished
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    },
    async removeTask (event, id) {
      event.preventDefault()
      try {
        await TaskService.deleteTask(id)
        this.tasks = this.tasks.filter(task => task.id !== id)
        ValidateStatus.popSucess('Tarefa deletada!', '')
      } catch (e) {
        console.log(e)
      }
    }
  },
  async mounted () {
    try {
      const response = await TaskService.getTasks()
      this.tasks = response
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
}

</script>

<style  scoped>

  #createTaskButton:disabled {
    cursor: not-allowed;
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
    gap: 16px;
    max-width: 500px;
    width: 90%;
    border: none;
    background-color: #cc2936ff;
    border-radius: 16px;
  }

  #task-form button {
    background-color: rgb(72, 164, 127);
    color: #fff;
    border: none;
    padding: .5rem 1rem;
    cursor: pointer;
    transition: all .3s;
  }

  #task-form button:hover {
    background-color: rgb(46, 222, 151);
    transform: scale(1.05);
  }

  #task-form input, textarea {
    width: 100%;
    resize: none;
    background-color: #388697ff;
  }

  #task {
    width: 100%;
  }

  @media (max-width: 350px) {
    #task-form {
      flex-wrap: wrap;
    }
    #task-form input, textarea {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }

</style>
