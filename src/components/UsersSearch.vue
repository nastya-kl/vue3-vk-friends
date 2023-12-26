<template>
  <section class="search-form" aria-label="Форма поиска пользователей">
    <h2 class="section__title">Все пользователи</h2>
    <my-input
      class="search-form__input"
      placeholder="Введите имя, фамилию или id пользователя"
    ></my-input>
    <my-users-list>
      <h3>Пользователь не найден</h3>
    </my-users-list>
  </section>
</template>

<script>
import MyUsersList from './UI/MyUsersList.vue';

export default { components: { MyUsersList } }
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
</style>
