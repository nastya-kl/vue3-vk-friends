<template>
  <ul class="users-list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'my-users-list'
}
</script>

<style>
.users-list {
  height: 57vh;
  background-color: rgb(61, 59, 59);
  border-radius: 3px;
  border: 1px solid rgb(44, 44, 44);
  margin-top: 20px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  overflow-y: scroll;
}
.users-list::-webkit-scrollbar {
  width: 7px;
}
.users-list::-webkit-scrollbar-track {
  background-color: inherit;
}
.users-list::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}
</style>
