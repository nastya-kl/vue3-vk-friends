<template>
  <section class="friends-list" aria-label="Все друзья выбранных пользователей">
    <h2 class="section__title">Друзья</h2>
    <my-button class="section__btn">Сбросить</my-button>
    <my-users-list>
      <h3 class="users-list__heading-empty">Друзья не найдены</h3>
    </my-users-list>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.friends-list {
  width: 100%;
  margin: 0 auto;
}
</style>