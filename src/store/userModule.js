export const userModule = {
  state: {
    userList: [],
    isAddedMap: {}
  },
  mutations: {
    setUsers(state, users) {
      state.userList = [...state.userList, ...users]
    },
    setIsAdded(state, { userId, bool }) {
      state.isAddedMap = { ...state.isAddedMap, [userId]: bool }
    }
  },
  actions: {
    addUser({ commit }, userID) {
      // eslint-disable-next-line no-undef
      VK.Api.call(
        'users.get',
        {
          user_ids: userID,
          fields: ['photo_200_orig', 'sex', 'bdate'],
          counters: ['friends'],
          v: '5.131',
          access_token: ''
        },
        (r) => {
          if (r) {
            const user = r.response[0]
            commit('setUsers', [user])
            commit('setIsAdded', { userId: user.id, bool: true })
          }
        }
      )
    },
    removeUser({ state, commit }, userID) {
      state.userList = state.userList.filter((user) => user.id !== userID)
      commit('setIsAdded', { userId: userID, bool: false })
    }
  },
  getters: {
    isUserAdded: (state) => (userId) => {
      return state.isAddedMap[userId] || false
    }
  },
  namespaced: true
}
