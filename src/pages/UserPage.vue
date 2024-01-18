<template>
  <section class="user-page" aria-label="Страница пользователя">
    <div class="user-page__info">
      <img :src="user.photo_200_orig" alt="Фото пользователя">
      <p>{{ user.first_name }} {{ user.last_name }}</p>
    </div>
  </section>
</template>

<script>
// import useGetUserById from '@/components/hooks/useGetUserById'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    user() {
      return this.$store.state.profile.user
    }
  },
  mounted() {
    this.getUser(this.id)
  },
  methods: {
    ...mapActions({
      getUserById: 'profile/getUserById'
    }),
    getUser(id) {
      this.getUserById(id)
    }
  }
}
</script>

<style lang="scss">
.user-page {
  width: 100%;
  margin: 0 auto;
}
</style>
