<template>
  <li @mouseenter="highlight = true" @mouseleave="highlight = false">
    <div :class="[{ 'done': isDone, 'highlight': highlight }, 'title']">{{ title }}</div> 
    <FlexBox :flowDirection="'row'">
      <Button :buttontype="'primary'" :onClick="() => $emit('toggleIsDone')">{{ isDone ? 'Mark as not done' : 'Mark as done' }}</Button>
      <Button :buttontype="'secondary'" :onClick="() => $emit('remove')"><Delete /></Button>
    </FlexBox>    
  </li>
</template>

<script>
import Button from './Button.vue'
import FlexBox from './FlexBox.vue'
import Delete from 'vue-material-design-icons/Delete.vue';

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
    Delete,
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
    gap: var(--ldb-lengths-1);
    max-width: 100%;
  }

  .title {
    overflow: hidden;
    word-wrap: break-word;
  }

  .highlight {
    text-decoration: underline;
  }

  .done {
    text-decoration: line-through;
  }
</style>