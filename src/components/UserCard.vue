<template>
  <div class="user-card">
    <div :style="{ display: 'flex'}">
      <img :src="user.photo" alt="Фото пользователя" class="user-card__photo" />
      <div class="user-card__info">
        <div :style="{ display: 'flex', gap: '5px' }">
          <p class="user-card__name">{{ user.name }}</p>
          <p class="user-card__last-name">{{ user.lastName }}</p>
        </div>
        <p class="user-card__id">id: {{ user.id }}</p>
      </div>
    </div>
    <my-button class="user-card__add-btn"></my-button>
  </div>
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
  width: 100%;
  min-height: 60px;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: rgb(175, 175, 175);
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  align-items: center;
}
.user-card__photo {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 20px;
}
.user-card__info {
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.user-card__name,
.user-card__last-name,
.user-card__id {
  margin: 0;
}
.user-card__id {
  font-size: 17px;
}
.user-card__add-btn {
  background: url('../public/icons/Add-Icon.svg') no-repeat center;
  width: 30px;
  height: 30px;
}
</style>
