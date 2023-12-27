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
        <my-button v-if="!isFinite(this.searchQuery)" @click="loadMoreUsers" style="padding: 10px">Ещё</my-button>
      </transition-group>
      <h3 class="users-list__heading-empty" v-else>Пользователь не найден</h3>
    </my-users-list>
  </section>
</template>

<script>
import MyUsersList from '@/components/UI/MyUsersList.vue'
import UserCard from '@/components/UserCard.vue'
// import axios from 'axios'

export default {
  data() {
    return {
      users: [],
      searchQuery: ''
    }
  },
  components: {
    MyUsersList,
    UserCard
  },
  methods: {
    searchUsers() {
      if (this.searchQuery.trim() === '') {
        this.users = []
        return
      }

      if (isFinite(this.searchQuery)) {
        // eslint-disable-next-line no-undef
        VK.Api.call(
          'users.get',
          { 
            user_ids: this.searchQuery,
            fields: 'photo_200_orig',
            v: '5.131'
          },
          (r) => {
            if (r) {
              this.users = r.response
            }
          }
        )
      } else {
        // eslint-disable-next-line no-undef
        VK.Api.call(
          'users.search',
          {
            q: this.searchQuery,
            fields: 'photo_200_orig',
            v: '5.131'
          },
          (r) => {
            if (r) {
              this.users = r.response.items
            }
          }
        )
      }
    },
    loadMoreUsers() {
      if (this.searchQuery.trim() === '') {
        this.users = []
        return
      }

      // eslint-disable-next-line no-undef
      VK.Api.call(
        'users.search',
        {
          q: this.searchQuery,
          fields: 'photo_200_orig',
          v: '5.131',
          offset: this.users.length,
          count: 5
        },
        (r) => {
          if (r) {
            this.users = [...this.users, ...r.response.items]
          }
        }
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
.observer {
  height: 10px;
  width: 80%;
  background-color: aqua;
}
</style>
