<template>
    <article class="task-article" :class="task.finished && 'task-finished'">
      <input
        @click="$emit('changeTask', $event, task.id)"
        type="checkbox"
        :checked="task.finished"
      >
      <p :class="task.finished && 'input-checked'">{{ task.title }}</p>
      <button @click="$emit('removeTask', $event, task.id)">Apagar tarefa</button>
</article>
</template>

<script>

export default {
  name: 'TaskForm',
  props: {
    task: {
      id: Number,
      title: String,
      finished: Boolean,
      createdAt: Date,
      updatedAt: Date
    }
  }

}

</script>

<style scoped>

  .task-article {
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 1rem;
    gap: 16px;
    max-width: 350px;
    width: 90%;
    word-break: break-all;
    border: none;
    background-color: #08415cff;
    border-radius: 16px;
  }

  p {
    width: 100%;
  }

  .task-article button {
    background-color: #cc2936ff;
    color: #fff;
    border: none;
    padding: .5rem 1rem;
    cursor: pointer;
    transition: all .3s;
  }

  .task-article button:hover {
    background-color: rgb(255, 82, 97);
    transform: scale(1.05);
  }

  .task-article input {
    cursor: pointer;
  }

  .input-checked {
    text-decoration: line-through;
  }

  .task-finished {
    filter: opacity(.6);
  }

  @media (max-width: 350px) {
    .task-article {
      justify-content: start;
    }

    button {
      width: 100%;
    }
  }

</style>
