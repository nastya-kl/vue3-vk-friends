<template>
  <div class="app">
    <img
      @click="$router.push('/vue3-vk-friends/')"
      class="logo"
      src="../public/icons/VK_Logo.svg"
      alt="Логотип Вконтакте"
    />
    <my-button class="auth__btn" @click="redirectToVk">Войти</my-button>
    <router-view></router-view>
  </div>
</template>

<script>
const clientId = 51822456
const redirectUri = 'https://nastya-kl.github.io/vue3-vk-friends/'
const scope = 'friends,photos,wall'

const authUrl = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}&v=5.131`

export default {
  onMount() {
    this.checkAccessToken()
  },
  methods: {
    redirectToVk() {
      window.location.href = authUrl
    },
    getAccessTokenFromUrl() {
      const match = window.location.href.match(/access_token=([^&]+)/)
      return match ? match[1] : null
    },
    checkAccessToken() {
      const accessToken = this.getAccessTokenFromUrl()
      if (accessToken) {
        console.log('Access Token:', accessToken)
        this.$store.commit('setToken', accessToken)
      }
    }
  }
}

function getAccessTokenFromUrl() {
  const match = window.location.href.match(/access_token=([^&]+)/)
  return match ? match[1] : null
}

const accessToken = getAccessTokenFromUrl()
console.log('Access Token:', accessToken)
</script>

<style>
.app {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}
.auth__btn {
  position: absolute;
  top: 24px;
  left: 100px;
  z-index: 50;
  min-height: 25px;
  min-width: 70px;
}
</style>
