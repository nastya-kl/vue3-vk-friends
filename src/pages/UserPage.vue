<template>
  <section class="user-page" aria-label="Страница пользователя">
    <div class="user-page__wrapper">
      <p class="user-page__back" @click="onClickToBack">
        <img src="../../public/icons/arrow-left.svg" alt="<-" />Назад
      </p>
      <my-preloader v-if="isUserLoading" />
      <div v-else class="user-page__info">
        <img class="user-page__photo" :src="user.photo_400_orig" alt="Фото пользователя" />
        <p class="user-page__name">{{ user.first_name }}</p>
        <p class="user-page__name">{{ user.last_name }}</p>
      </div>
      <my-preloader v-if="isPostsLoading" />
      <div class="user-page__wall-wrapper" v-else>
        <ul v-if="!errorMessage" class="user-page__wall">
          <WallPost v-for="post in posts" :post="post" :key="post.id" />
          <my-button
            :style="{ padding: '8px 0' }"
            v-if="posts.length < totalPosts"
            @click="loadMorePosts(id)"
            >Ещё</my-button
          >
        </ul>
        <div v-else :style="{ display: 'flex', flexDirection: 'column' }">
          <div class="user-page__sad-face"></div>
          <p class="user-page__error">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import useGetUserById from '@/components/hooks/useGetUserById'
import { mapActions } from 'vuex'
import MyPreloader from '@/components/UI/MyPreloader.vue'
import WallPost from '@/components/WallPost.vue'

export default {
  components: {
    MyPreloader,
    WallPost
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    user() {
      return this.$store.state.profile.user
    },
    posts() {
      return this.$store.state.profile.posts
    },
    errorMessage() {
      return this.$store.state.profile.errorMessage
    },
    isUserLoading() {
      return this.$store.state.profile.isUserLoading
    },
    isPostsLoading() {
      return this.$store.state.profile.isPostsLoading
    },
    totalPosts() {
      return this.$store.state.profile.totalPosts
    }
  },
  mounted() {
    this.getUserById(this.id)
    this.getPosts(this.id)
  },
  methods: {
    ...mapActions({
      getUserById: 'profile/getUserById',
      getPosts: 'profile/getPosts',
      resetUser: 'profile/resetUser',
      loadMorePosts: 'profile/loadMorePosts'
    }),
    onClickToBack() {
      this.resetUser()
      this.$router.push('/vue3-vk-friends/')
    }
  }
}
</script>

<style lang="scss">
.user-page {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  &__wrapper {
    padding: 20px;
    display: flex;
    position: relative;
  }

  &__back {
    display: flex;
    margin: 0;
    align-items: center;
    font-size: 20px;
    height: 30px;
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    margin: 0 40px 0 10px;
    max-width: 500px;
  }

  &__photo {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 7%;
    margin-bottom: 20px;
  }

  &__name {
    margin: 0;
    font-size: 40px;
    font-weight: 700;
  }

  &__wall-wrapper {
    margin: 0 auto;
    padding: 0 15px;
    border: 1px solid rgb(75, 75, 75);
    border-radius: 7px;
    background-color: rgb(43, 40, 40);
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    position: sticky;
    top: 0;
    right: 0;
    height: 82vh;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background-color: inherit;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 6px;
    }
  }

  &__wall {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    list-style: none;
    max-width: 900px;
    padding: 0;
  }

  &__error {
    margin: 0 auto;
    max-width: 600px;
    font-size: 30px;
    text-align: center;
  }

  &__sad-face {
    background: url('../../public/icons/sad-icon.png') no-repeat center;
    margin: 30px auto 40px;
    width: 100px;
    height: 100px;
  }
}
</style>
