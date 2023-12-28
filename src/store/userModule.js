export const userModule = {
  state: {
    userList: [],
    token: ''
  },
  mutations: {
    setUsers(state, users) {
      state.userList = users
    },
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    addUser({ state, commit }, userID) {
      // eslint-disable-next-line no-undef
      VK.Api.call(
        'users.get',
        {
          user_ids: userID,
          fields: ['photo_200_orig', 'sex', 'bdate'],
          counters: 'friends',
          v: '5.131',
          access_token: state.token
        },
        (r) => {
          if (r) {
            console.log(r.response)
            commit('setUsers', r.response)
            //state.userList.push(r.response)
          }
        }
      )
    }
  },
  namespaced: true
}
