<template>
  <li @mouseenter="highlight = true" @mouseleave="highlight = false">
    <label :class="[{ 'done': isDoneValue, 'highlight': highlight }, 'title']">
      <flex-box :flowDirection="'row'">
        <input :value="isDoneValue" @change="$emit('toggleIsDoneValue')" type="checkbox" />
        {{ title }}
      </flex-box>
    </label>
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
    border-left: 3px solid var(--ldb-colors-blue);
  }

  .done {
    text-decoration: line-through;
  }
</style>