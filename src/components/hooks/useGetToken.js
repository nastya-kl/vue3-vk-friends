export default function useGetToken() {
  function getAccessTokenFromUrl() {
    const match = window.location.href.match(/access_token=([^&]+)/)
    return match ? match[1] : null
  }

  return {
    getAccessTokenFromUrl
  }
}
