import useGetToken from '@/components/hooks/useGetToken'
const { token } = useGetToken()

export const searchUsersModule = {
  state: {
    users: [],
    searchQuery: ''
  },
  mutations: {
    setUsers(state, users) {
      state.users = [...users]
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    }
  },
  actions: {
    searchUsers({ state, commit }) {
      if (state.searchQuery.trim() === '') {
        commit('setUsers', [])
        return
      }

      if (isFinite(state.searchQuery)) {
        // eslint-disable-next-line no-undef
        VK.Api.call(
          'users.get',
          {
            user_ids: state.searchQuery,
            fields: 'photo_200_orig',
            v: '5.131',
            access_token: token
          },
          (r) => {
            if (r) {
              commit('setUsers', r.response)
            }
          }
        )
      } else {
        // eslint-disable-next-line no-undef
        VK.Api.call(
          'users.search',
          {
            q: state.searchQuery,
            fields: 'photo_200_orig',
            v: '5.131',
            access_token: token
          },
          (r) => {
            if (r) {
              commit('setUsers', r.response.items)
            }
          }
        )
      }
    },
    loadMoreUsers({ state, commit }) {
      if (state.searchQuery.trim() === '') {
        commit('setUsers', [])
        return
      }

      // eslint-disable-next-line no-undef
      VK.Api.call(
        'users.search',
        {
          q: state.searchQuery,
          fields: 'photo_200_orig',
          v: '5.131',
          offset: state.users.length,
          count: 5,
          access_token: token
        },
        (r) => {
          if (r) {
            commit('setUsers', [...state.users, ...r.response.items])
          }
        }
      )
    }
  },
  namespaced: true
}
