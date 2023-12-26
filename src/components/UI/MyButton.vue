<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.button {
  padding: 0;
  border: none;
  cursor: pointer;
  color: rgb(219, 219, 219);
  background-color: rgb(50, 102, 179);
  border-radius: 3px;
  transition: transform .2s ease-in-out;
}
.button:hover {
  transform: scale(1.03);
}
.button:active {
  background-color: rgb(79, 115, 192);
}
</style>
