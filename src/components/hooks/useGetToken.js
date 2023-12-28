import { onMounted, ref } from 'vue'

export default function useSearchUsers() {
  const token = ref('')

  function getAccessTokenFromUrl() {
    const match = window.location.href.match(/access_token=([^&]+)/)
    return match ? match[1] : null
  }

  function checkAccessToken() {
    const accessToken = getAccessTokenFromUrl()
    if (accessToken) {
      console.log('Access Token:', accessToken)
      token.value = accessToken
    }
  }

  onMounted(checkAccessToken)

  return {
    token
  }
}
