<template>
    <article id="task-article">
      <input @change="change" type="checkbox" :checked="task.finished">
      <p>{{ task.text }}</p>
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
  },
  methods: {
    change (event) {
      this.$emit('change', this.task.id, event.target.checked)
    }
  }

}

</script>
