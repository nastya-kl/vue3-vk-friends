<template>
  <section class="search-form" aria-label="Форма поиска пользователей">
    <h2 class="section__title">Все пользователи</h2>
    <my-input
      v-model="searchQuery"
      class="search-form__input"
      placeholder="Введите имя, фамилию или id пользователя"
    ></my-input>
    <my-users-list>
      <transition-group name="user-list">
        <UserCard v-for="user in sortedUsers" :user="user" :key="user.id" />
      </transition-group>
    </my-users-list>
  </section>
</template>

<script>
import MyUsersList from '@/components/UI/MyUsersList.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  components: {
    MyUsersList,
    UserCard
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedUsers() {
      return this.users.filter(
        (user) =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.id.toString().includes(this.searchQuery)
      )
    }
  }
}
</script>

<style scoped>
.search-form {
  width: 100%;
  margin: 0 auto;
}
.search-form__input {
  width: 100%;
  min-height: 40px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>
