<template>
  <section class="search-form" aria-label="Форма поиска пользователей">
    <h2 class="section__title">Все пользователи</h2>
    <my-input
      v-model="searchQuery"
      @input="searchUsers"
      class="search-form__input"
      placeholder="Введите имя, фамилию или id пользователя"
    ></my-input>
    <my-users-list>
      <transition-group v-if="users.length > 0" name="user-list">
        <UserCard v-for="user in users" :user="user" :key="user.id" />
        <my-button
          v-if="!isFinite(this.searchQuery)"
          @click="loadMoreUsers"
          style="padding: 10px"
          >
            Ещё
        </my-button>
      </transition-group>
      <h3 class="users-list__heading-empty" v-else>Пользователь не найден</h3>
    </my-users-list>
  </section>
</template>

<script>
import MyUsersList from '@/components/UI/MyUsersList.vue'
import UserCard from '@/components/UserCard.vue'
import useSearchUsers from '@/components/hooks/useSearchUsers'

export default {
  components: {
    MyUsersList,
    UserCard
  },
  setup() {
    const { users, searchQuery, searchUsers, loadMoreUsers } = useSearchUsers()

    return {
      users,
      searchQuery,
      searchUsers,
      loadMoreUsers
    }
  },
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
.observer {
  height: 10px;
  width: 80%;
  background-color: aqua;
}
</style>
