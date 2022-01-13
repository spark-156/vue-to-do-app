<template>
  <li>{{ title }} <Button :buttontype="'secondary'" :onClick="() => $emit('remove')">Remove</Button></li>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'TodoItem',
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  emits: {
    remove: Function
  }
}
</script>

<style scoped>
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
</style>