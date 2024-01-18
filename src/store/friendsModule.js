import useGetToken from '@/components/hooks/useGetToken'
const { token } = useGetToken()

export const friendsModule = {
  state: {
    friendsList: []
  },
  mutations: {
    setFriendsList(state, friends) {
      const uniqueFriends = friends.filter(
        (friend) => !state.friendsList.some((existingFriend) => existingFriend.id === friend.id)
      )
      state.friendsList = [...state.friendsList, ...uniqueFriends]
    },
    resetFriendsList(state) {
      state.friendsList = []
    }
  },
  actions: {
    addFriend({ commit }, usersList) {
      usersList.forEach((user) => {
        // eslint-disable-next-line no-undef
        VK.Api.call(
          'friends.get',
          {
            user_id: user.id,
            order: 'name',
            fields: ['photo_200_orig', 'sex', 'bdate', 'is_closed'],
            v: '5.131',
            count: 10,
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
    loadmoreFriends({ commit, state }, usersList) {
      usersList.forEach((user) => {
        // eslint-disable-next-line no-undef
        VK.Api.call(
          'friends.get',
          {
            user_id: user.id,
            order: 'name',
            fields: ['photo_200_orig', 'sex', 'bdate', 'is_closed'],
            v: '5.131',
            offset: state.friendsList.length,
            count: 5,
            access_token: token
          },
          (r) => {
            if (r) {
              const friends = r.response.items
              commit('setFriendsList', [...state.friendsList, ...friends])
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
