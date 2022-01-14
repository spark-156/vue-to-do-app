<template>
  <button @click="onClick" type="type" :class="{'button-primary': buttontype === 'primary', 'button-secondary': buttontype === 'secondary' }">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    onClick: {
      type: Function,
    },
    type: {
      type: String,
      default() {
        return 'button'
      }
    },
    buttontype: {
      type: String,
      validator: (val) => ['primary', 'secondary'].includes(val),
      required: true
    }
  }
}
</script>

<style scoped>
  button {
    padding: var(--ldb-lengths-1);
    border-radius: var(--ldb-lengths-1);
    cursor: pointer;
  }

  .button-primary {
    border: none;
    background-color: var(--ldb-colors-blue);
    color: var(--ldb-colors-white);
  }

  .button-secondary {
    background-color: var(--ldb-colors-white);
    color: var(--ldb-colors-black);
    border: 1px solid var(--ldb-colors-black);
  }
</style>