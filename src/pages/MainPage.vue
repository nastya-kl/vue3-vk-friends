<template>
  <main class="main-page">
    <h1 class="main-page__heading">Поиск друзей</h1>
    <div class="main-page__container">
      <UsersSearch />
      <SelectedUsersList />
      <FriendsList />
    </div>
  </main>
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
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  &__heading {
    font-size: 40px;
    font-weight: 700;
    margin: 0 0 50px;
    text-align: center;
    color: rgb(241, 241, 241);
  }

  &__container {
    min-height: 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;
  }
}
</style>
