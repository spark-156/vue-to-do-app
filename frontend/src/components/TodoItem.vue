<template>
  <li>{{ title }} <button class="button-secondary" @click="$emit('remove')">Remove</button></li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    title: String
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