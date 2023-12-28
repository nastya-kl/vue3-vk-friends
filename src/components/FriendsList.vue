<template>
  <section class="friends-list" aria-label="Все друзья выбранных пользователей">
    <h2 class="section__title">Друзья</h2>
    <my-button class="section__btn">Сбросить</my-button>
    <my-users-list>
      <transition-group v-if="friendsList.length > 0" name="user-list">
        <FriendCard v-for="user in friendsList" :user="user" :key="user.id" />
      </transition-group>
      <h3 v-else class="users-list__heading-empty">Друзья не найдены</h3>
    </my-users-list>
  </section>
</template>

<script>
import MyUsersList from '@/components/UI/MyUsersList.vue'
import FriendCard from '@/components/FriendCard.vue'

export default {
  components: {
    MyUsersList,
    FriendCard
  },
  computed: {
    friendsList() {
      return this.$store.state.friend.friendsList
    }
  },
}
</script>

<style scoped>
.friends-list {
  width: 100%;
  margin: 0 auto;
}
</style>
