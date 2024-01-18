import { ref } from 'vue'
import useGetToken from '@/components/hooks/useGetToken'

export default function useGetFriendsNumber() {
  const { token } = useGetToken()
  const friendsNumber = ref(0)

  function getFriendsNumber(id) {
    // eslint-disable-next-line no-undef
    VK.Api.call(
      'users.get',
      {
        user_ids: id,
        fields: ['counters'],
        v: '5.131',
        access_token: token
      },
      (r) => {
        if (r) {
          const count = r.response[0].counters.friends
          friendsNumber.value = count
        }
      }
    )
  }

  return {
    getFriendsNumber,
    friendsNumber
  }
}
