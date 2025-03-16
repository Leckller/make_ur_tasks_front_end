<template>
    <article class="task-article" :class="task.finished && 'task-finished'">
      <input
        @click="$emit('changeTask', task.id)"
        type="checkbox"
        :checked="task.finished"
      >
      <p :class="task.finished && 'input-checked'">{{ task.text }}</p>
      <button @click="$emit('removeTask', task.id)">Remove</button>
</article>
</template>

<script>

export default {
  name: 'TaskForm',
  props: {
    task: {
      id: Number,
      text: String,
      finished: Boolean
    }
  }

}

</script>

<style scoped>

  .task-article {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ccc;
    gap: 16px;
    max-width: 350px;
    width: 90%;
  }

  .task-article button {
    background-color: #f00;
    color: #fff;
    border: none;
    padding: .5rem 1rem;
    cursor: pointer;
    transition: all .3s;
  }

  .task-article button:hover {
    background-color: #f55;
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