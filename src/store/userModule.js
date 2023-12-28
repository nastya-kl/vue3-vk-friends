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
          counters: 'friends',
          v: '5.131',
          access_token:
            'vk1.a.UkpQ02GSM1JYFZHt7nuwzqm_wn0NOL3WCEsUiiB0Fk1B3MFEkc7jbmr-KJI5X8laANMg6gBHnI_q1241eFx6pPbdUMdr0QIWY12Tf4zirkdDpWLXKCdN8oJus2MDHf_DG9FfL9mas2aq-2Rqqjqp5vJCgGnapS57RuYkwsOlKnJoylmu4xGIih6L2b6EdMMj'
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
