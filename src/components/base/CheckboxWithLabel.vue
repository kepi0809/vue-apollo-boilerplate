<template>
  <label :for="$attrs.id">
    <input type="checkbox" v-bind="$attrs" @input="check" />
    <slot />
  </label>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  model: {
    // prop: 'checked',
    event: 'check',
  },
  props: {
    value: { type: Object, default: () => ({}) },
  },
  mounted() {
    console.log(this)
  },
  methods: {
    check(e) {
      console.log(e)
      this.$emit('check', this.value)
    },
  },
}
</script>
