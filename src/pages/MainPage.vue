<template>
  <div class="main-page">
    <h1 class="main-page__heading">Поиск друзей</h1>
    <div class="main-page__container">
      <UsersSearch :users="users"/>
      <SelectedUsersList />
      <FriendsList />
    </div>
  </div>
</template>

<script>
import UsersSearch from '@/components/UsersSearch.vue'
import SelectedUsersList from '@/components/SelectedUsersList.vue'
import FriendsList from '@/components/FriendsList.vue'

export default {
  components: {
    UsersSearch,
    SelectedUsersList,
    FriendsList
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Иван',
          lastName: 'Иванов',
          photo: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
          id: 2,
          name: 'Петр',
          lastName: 'Петров',
          photo: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
          id: 3,
          name: 'Сергей',
          lastName: 'Сергеев',
          photo: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
        {
          id: 4,
          name: 'Александр',
          lastName: 'Александров',
          photo: 'https://randomuser.me/api/portraits/women/4.jpg',
        }
      ],
    };
  },
}
</script>

<style>
.main-page__heading {
  font-size: 40px;
  font-weight: 700;
  margin: 30px 0 80px;
  text-align: center;
  color: rgb(241, 241, 241);
}
.main-page__container {
  min-height: 200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
}
</style>
