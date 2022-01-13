<template>
  <li @mouseenter="highlight = true" @mouseleave="highlight = false">
    <div :class="[{ 'done': isDone, 'highlight': highlight }]">{{ title }}</div> 
    <FlexBox :flowDirection="'row'">
      <Button :buttontype="'primary'" :onClick="() => $emit('toggleIsDone')">{{ isDone ? 'Mark as not done' : 'Mark as done' }}</Button>
      <Button :buttontype="'secondary'" :onClick="() => $emit('remove')">Remove</Button>
    </FlexBox>    
  </li>
</template>

<script>
import Button from './Button.vue'
import FlexBox from './FlexBox.vue'

export default {
  name: 'TodoItem',
  data() {
    return {
      highlight: false,
    }
  },
  components: {
    Button,
    FlexBox,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true
    }
  },
  emits: {
    remove: Function,
    toggleIsDone: Function
  }
}
</script>

<style scoped>
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }

  .highlight {
    text-decoration: underline;
  }

  .done {
    text-decoration: line-through;
  }
</style>