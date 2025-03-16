<template>
    <article id="task-article">
      <input
        @click="$emit('changeTask', task.id)"
        type="checkbox"
        :checked="task.finished"
      >
      <p>{{ task.text }}</p>
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
