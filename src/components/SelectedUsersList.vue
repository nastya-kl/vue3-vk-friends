<template>
  <section class="selected-users" aria-label="Список выбранных пользователей">
    <h2 class="section__title">Исходный список</h2>
    <my-button class="section__btn">Построить</my-button>
    <my-users-list>
      <h3>Список пуст</h3>
    </my-users-list>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.selected-users {
  width: 100%;
  margin: 0 auto;
}
</style>
