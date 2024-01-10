import { onMounted } from 'vue'

export default function useGetToken() {
  let token = ''

  function getAccessTokenFromUrl() {
    const match = window.location.href.match(/access_token=([^&]+)/)
    return match ? match[1] : null
  }

  function checkAccessToken() {
    const accessToken = getAccessTokenFromUrl()
    if (accessToken) {
      token = accessToken
    }
  }

  onMounted(checkAccessToken)

  return {
    token
  }
}
