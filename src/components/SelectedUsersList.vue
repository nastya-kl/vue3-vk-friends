<template>
  <section class="selected-users" aria-label="Список выбранных пользователей">
    <h2 class="section__title">Исходный список</h2>
    <my-button class="section__btn">Построить</my-button>
    <my-users-list>
      <transition-group v-if="users.length > 0" name="user-list">
        <UserCard v-for="user in users" :user="user" :key="user.id" />
        <my-button @click="loadMoreUsers" style="padding: 10px">Ещё</my-button>
      </transition-group>
      <h3 class="users-list__heading-empty" v-else>Список пуст</h3>
    </my-users-list>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      searchQuery: ''
    }
  },
}
</script>

<style scoped>
.selected-users {
  width: 100%;
  margin: 0 auto;
}
</style>
