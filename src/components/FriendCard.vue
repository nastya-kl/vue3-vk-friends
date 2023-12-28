<template>
  <li class="friend-card">
    <div :style="{ display: 'flex', justifyContent: 'space-between' }">
      <img :src="user.photo_200_orig" alt="Фото пользователя" class="friend-card__photo" />
      <div class="friend-card__info">
        <p class="friend-card__name">{{ user.first_name }}</p>
        <p class="friend-card__last-name">{{ user.last_name }}</p>
      </div>
      <div class="friend-card__info">
        <p class="friend-card__gender">Пол: {{ getGender(user) }}</p>
        <p class="friend-card__age">Возраст: </p>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    isUserAdded() {
      return this.$store.state.user.isUserAdded
    },
    ...mapGetters('user', ['isUserAdded']),
    userIsAdded() {
      return this.isUserAdded(this.user.id)
    }
  },
  methods: {
    ...mapActions({
      addUser: 'user/addUser',
      removeUser: 'user/removeUser'
    }),
    getGender(user) {
      return user.sex === 0 ? 'Мужской' : 'Женский'
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
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  align-items: center;
  overflow: hidden;
}
.friend-card__photo {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
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
