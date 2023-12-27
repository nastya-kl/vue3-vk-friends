<template>
  <li class="user-card">
    <div :style="{ display: 'flex' }">
      <img :src="user.photo_200_orig" alt="Фото пользователя" class="user-card__photo" />
      <div class="user-card__info">
        <p class="user-card__name">{{ user.first_name }}</p>
        <p class="user-card__last-name">{{ user.last_name }}</p>
      </div>
      <p style="align-self: flex-end; margin: 0%;">id {{ user.id }}</p>
    </div>
    <my-button class="user-card__add-btn"></my-button>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.user-card {
  color: rgb(44, 44, 44);
  position: relative;
  width: 100%;
  min-height: 60px;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: rgb(175, 175, 175);
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  align-items: center;
  overflow: hidden;
}
.user-card__photo {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
}
.user-card__info {
  max-width: 165px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  margin-right: 10px;
}
.user-card__name,
.user-card__last-name {
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-card__add-btn {
  top: 0;
  right: 0;
  background: url('../../public/icons/Add-Icon.svg') no-repeat center;
  width: 30px;
  height: 30px;
}
</style>
