import { ref } from 'vue'
import useGetToken from '@/components/hooks/useGetToken'

export default function useSearchUsers() {
  const users = ref([])
  const searchQuery = ref('')
  const { token } = useGetToken()
  console.log(token);

  function getAccessTokenFromUrl() {
    const match = window.location.href.match(/access_token=([^&]+)/)
    return match ? match[1] : null
  }

  console.log(getAccessTokenFromUrl());

  function searchUsers() {
    if (searchQuery.value.trim() === '') {
      users.value = []
      return
    }

    if (isFinite(searchQuery.value)) {
      // eslint-disable-next-line no-undef
      VK.Api.call(
        'users.get',
        {
          user_ids: searchQuery.value,
          fields: 'photo_200_orig',
          v: '5.131',
          access_token: token
        },
        (r) => {
          if (r) {
            users.value = r.response
          }
        }
      )
    } else {
      // eslint-disable-next-line no-undef
      VK.Api.call(
        'users.search',
        {
          q: searchQuery.value,
          fields: 'photo_200_orig',
          v: '5.131',
          access_token: token
        },
        (r) => {
          if (r) {
            users.value = r.response.items
          }
        }
      )
    }
  }

  function loadMoreUsers() {
    if (searchQuery.value.trim() === '') {
      users.value = []
      return
    }

    // eslint-disable-next-line no-undef
    VK.Api.call(
      'users.search',
      {
        q: searchQuery.value,
        fields: 'photo_200_orig',
        v: '5.131',
        offset: users.value.length,
        count: 5,
        access_token: token
      },
      (r) => {
        if (r) {
          users.value = [...users.value, ...r.response.items]
        }
      }
    )
  }

  return {
    users,
    searchQuery,
    searchUsers,
    loadMoreUsers
  }
}


