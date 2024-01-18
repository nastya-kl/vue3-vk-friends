<template>
  <li class="friend-card" @click="$router.push(`/vue3-vk-friends/users/${user.id}`)">
    <div class="friend-card__container" @click="getFriends">
      <img :src="user.photo_200_orig" alt="Фото пользователя" class="friend-card__photo" />
      <div class="friends-card__text">
        <div class="friend-card__info">
          <p class="friend-card__name">{{ user.first_name }}</p>
          <p class="friend-card__last-name">{{ user.last_name }}</p>
        </div>
        <div class="friend-card__info">
          <p class="friend-card__gender">Пол: {{ getGender(user) }}</p>
          <p class="friend-card__age">Возраст: {{ getAge(user) }}</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  methods: {
    getGender(user) {
      return user.sex === 0 ? 'Мужской' : 'Женский'
    },
    getAge(user) {
      if (user.bdate && user.bdate.split('.') === 3) {
        const dateArray = user.bdate.split('.')
        const day = parseInt(dateArray[0], 10)
        const month = parseInt(dateArray[1], 10) - 1
        const year = parseInt(dateArray[2], 10)

        const birthDate = new Date(year, month, day)
        const currentDate = new Date()

        let age = currentDate.getFullYear() - birthDate.getFullYear()

        if (
          currentDate.getMonth() < birthDate.getMonth() ||
          (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
        ) {
          age--
        }
        return age
      }
      return 'Не указан'
    }
  }
}
</script>

<style>
.friend-card {
  color: rgb(44, 44, 44);
  position: relative;
  width: 100%;
  min-height: 90px;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: rgb(175, 175, 175);
  border-radius: 3px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}
.friend-card:hover {
  cursor: pointer;
  opacity: 0.9;
  transform: scale(1.01);
}
.friend-card__container {
  display: flex;
  width: 100%;
}
.friend-card__photo {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
}
.friends-card__text {
  display: flex;
  justify-content: space-between;
  width: 74%;
}
.friend-card__info {
  font-size: 13px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
}
.friend-card__name,
.friend-card__last-name {
  font-size: 15px;
  font-weight: 700;
}
.friend-card__name,
.friend-card__last-name,
.friend-card__gender,
.friend-card__age {
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.friend-card__add-btn_type_add {
  top: 0;
  right: 0;
  background: url('../../public/icons/Add-Icon.svg') no-repeat center;
  width: 30px;
  height: 30px;
}
.friend-card__add-btn_type_delete {
  top: 0;
  right: 0;
  background: url('../../public/icons/Delete-Icon.svg') no-repeat center;
  width: 30px;
  height: 30px;
}
</style>
