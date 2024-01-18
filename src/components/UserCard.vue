<template>
  <li class="user-card">
    <div :style="{ display: 'flex' }">
      <img :src="user.photo_200_orig" alt="Фото пользователя" class="user-card__photo" />
      <div class="user-card__info">
        <p class="user-card__name">{{ user.first_name }}</p>
        <p class="user-card__last-name">{{ user.last_name }}</p>
        <p class="user-card__id">id&nbsp;{{ user.id }}</p>
      </div>
    </div>
    <p v-if="user.is_closed" class="user-card__no-friends-text">
      Друзья<br />скрыты
    </p>
    <div v-else>
      <my-button
        v-if="!userIsAdded"
        @click="addUser(user.id)"
        class="user-card__add-btn_type_add"
      ></my-button>
      <my-button
        v-else
        @click="removeUser(user.id)"
        class="user-card__add-btn_type_delete"
      ></my-button>
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
    })
  }
}
</script>

<style scoped lang="scss">
.user-card {
  color: rgb(44, 44, 44);
  position: relative;
  width: 100%;
  min-height: 85px;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: rgb(175, 175, 175);
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  align-items: center;
  overflow: hidden;

  &__photo {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 20px;
  }

  &__info {
    max-width: 165px;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    margin-right: 10px;
  }

  &__id {
    align-self: flex-start;
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    color: #362957;
  }

  &__name,
  &__last-name {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__no-friends-text {
    font-size: 12px;
    text-align: center;
    font-weight: 500;
    color: #7f1414;
  }

  &__add-btn_type_add {
    top: 0;
    right: 0;
    background: url('../../public/icons/Add-Icon.svg') no-repeat center;
    width: 30px;
    height: 30px;
  }

  &__add-btn_type_delete {
    top: 0;
    right: 0;
    background: url('../../public/icons/Delete-Icon.svg') no-repeat center;
    width: 30px;
    height: 30px;
  }
}
</style>
