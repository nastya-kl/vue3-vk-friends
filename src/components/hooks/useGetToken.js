import { onMounted, ref } from 'vue'

export default function useGetToken() {
  const token = ref('')

  function getAccessTokenFromUrl() {
    const match = window.location.href.match(/access_token=([^&]+)/)
    return match ? match[1] : null
  }

  function checkAccessToken() {
    const accessToken = getAccessTokenFromUrl()
    console.log(accessToken);
    if (accessToken) {
      token.value = accessToken
    }
  }

  onMounted(checkAccessToken)

  return {
    token: token.value
  }
}
