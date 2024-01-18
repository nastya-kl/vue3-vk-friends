<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
input {
  padding: 0 10px;
  border-radius: 3px;
  outline: none;
  box-shadow: none;
  color: inherit;
  background-color: rgb(44, 44, 44);
  border: 1px solid rgb(105, 105, 105);
  box-sizing: border-box;

  &:focus {
    border: 1px solid rgb(153, 153, 153);
  }

  &::placeholder {
    color: rgb(136, 136, 136);
  }
}
</style>
