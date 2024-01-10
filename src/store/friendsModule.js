import useGetToken from '@/components/hooks/useGetToken'
const { token } = useGetToken()

export const friendsModule = {
  state: {
    friendsList: []
  },
  mutations: {
    setFriendsList(state, friends) {
      state.friendsList = [...friends]
    },
    resetFriendsList(state) {
      state.friendsList = []
    }
  },
  actions: {
    addFriend({ commit, state }, usersList) {
      usersList.forEach((user) => {
        // eslint-disable-next-line no-undef
        VK.Api.call(
          'friends.get',
          {
            user_id: user.id,
            order: 'name',
            fields: ['photo_200_orig', 'sex', 'bdate'],
            counters: ['friends'],
            offset: state.friendsList.length,
            v: '5.131',
            access_token: token
          },
          (r) => {
            if (r) {
              const friends = r.response.items
              commit('setFriendsList', friends)
            }
          }
        )
      })
    },
    resetFriendsList({ commit }) {
      commit('resetFriendsList')
    }
  },
  namespaced: true
}
