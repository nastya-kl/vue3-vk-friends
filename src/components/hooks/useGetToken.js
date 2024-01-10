import { onMounted } from 'vue'

export default function useGetToken() {
  function getAccessTokenFromUrl() {
    const match = window.location.href.match(/access_token=([^&]+)/)
    return match ? match[1] : null
  }

  const token = getAccessTokenFromUrl()

  function checkAccessToken() {
    if (token) {
      return token
    }
  }

  onMounted(checkAccessToken)

  return {
    token
  }
}
