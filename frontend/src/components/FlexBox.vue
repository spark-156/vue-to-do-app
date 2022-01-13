<template>
  <div :class="['container', { 'flex-direction-row': flowDirection === 'row'}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlexBox',
  props: {
    flowDirection: {
      type: String,
      validator: (val) => ['column', 'row'].includes(val),
      required: false,
      default() {
        return 'column'
      }
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--ldb-lengths-1);
  }
  .flex-direction-row {
    flex-direction: row;
  }
</style>
