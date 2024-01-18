import useGetToken from '@/components/hooks/useGetToken'
const { token } = useGetToken()

export const userProfileModule = {
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    getUserById({ commit }, id) {
      // eslint-disable-next-line no-undef
      VK.Api.call(
        'users.get',
        {
          user_ids: id,
          fields: ['photo_200_orig', 'posts', 'online'],
          v: '5.131',
          access_token: token
        },
        (r) => {
          if (r) {
            const user = r.response[0]
            commit('setUser', user)
          }
        }
      )
    }
  },
  namespaced: true
}
