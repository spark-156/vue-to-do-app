<template>
  <li @mouseenter="highlight = true" @mouseleave="highlight = false">
    <label :class="[{ 'done': isDoneValue, 'highlight': highlight }, 'title']">
      <flex-box :flowDirection="'row'">
        <input :value="isDoneValue" @change="$emit('toggleIsDoneValue')" type="checkbox" />
        <!-- <div :class="[{ 'done': isDone, 'highlight': highlight }, 'title']">{{ title }}</div>  -->
        {{ title }}
      </flex-box>
    </label>
      <!-- <Button :buttontype="'primary'" :onClick="() => $emit('toggleIsDone')">{{ isDone ? 'Mark as not done' : 'Mark as done' }}</Button> -->
    <Button :buttontype="'secondary'" :onClick="() => $emit('remove')"><Delete /></Button>
  </li>
</template>

<script>
import Button from './Button.vue'
import Delete from 'vue-material-design-icons/Delete.vue';
import FlexBox from './FlexBox.vue';

export default {
  name: 'TodoItem',
  data() {
    return {
      highlight: false,
    }
  },
  components: {
    Button,
    Delete,
    FlexBox,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    isDoneValue: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    { remove: Function, },
    'toggleIsDoneValue',
  ]
}
</script>

<style scoped>
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: var(--ldb-lengths-1);
    width: 100%;
  }

  .title {
    overflow: hidden;
    word-wrap: break-word;
    align-self: left;
  }

  .highlight {
    text-decoration: underline;
  }

  .done {
    text-decoration: line-through;
  }
</style>