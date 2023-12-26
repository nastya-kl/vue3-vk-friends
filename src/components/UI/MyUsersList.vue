<template>
  <div class="users-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-users-list'
}
</script>

<style>
.users-list {
  width: 100%;
  min-height: 200px;
  background-color: rgb(61, 59, 59);
  border-radius: 3px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
