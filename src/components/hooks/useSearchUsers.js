import { ref } from 'vue'

export default function useSearchUsers() {
  const users = ref([])
  const searchQuery = ref('')
  const token =
    'vk1.a.UkpQ02GSM1JYFZHt7nuwzqm_wn0NOL3WCEsUiiB0Fk1B3MFEkc7jbmr-KJI5X8laANMg6gBHnI_q1241eFx6pPbdUMdr0QIWY12Tf4zirkdDpWLXKCdN8oJus2MDHf_DG9FfL9mas2aq-2Rqqjqp5vJCgGnapS57RuYkwsOlKnJoylmu4xGIih6L2b6EdMMj'

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


