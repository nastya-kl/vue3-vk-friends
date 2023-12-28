<template>
  <section class="selected-users" aria-label="Список выбранных пользователей">
    <h2 class="section__title">Исходный список</h2>
    <my-button class="section__btn" @click="getFriends">Построить</my-button>
    <my-users-list>
      <transition-group v-if="userList.length > 0" name="user-list">
        <UserCard v-for="user in userList" :user="user" :key="user.id" />
      </transition-group>
      <h3 class="users-list__heading-empty" v-else>Список пуст</h3>
    </my-users-list>
  </section>
</template>

<script>
import MyUsersList from '@/components/UI/MyUsersList.vue'
import UserCard from '@/components/UserCard.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    MyUsersList,
    UserCard
  },
  computed: {
    userList() {
      return this.$store.state.user.userList
    }
  },
  methods: {
    ...mapActions({
      addFriend: 'friend/addFriend'
    }),
    getFriends() {
      this.addFriend(this.userList)
    }
  }
}
</script>

<style scoped>
.selected-users {
  width: 100%;
  margin: 0 auto;
}
</style>
