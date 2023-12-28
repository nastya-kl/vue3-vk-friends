export const friendsModule = {
  state: {
    friendsList: []
  },
  mutations: {
    setFriendsList(state, friends) {
      state.friendsList = [...friends]
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
            access_token:
              'vk1.a.UkpQ02GSM1JYFZHt7nuwzqm_wn0NOL3WCEsUiiB0Fk1B3MFEkc7jbmr-KJI5X8laANMg6gBHnI_q1241eFx6pPbdUMdr0QIWY12Tf4zirkdDpWLXKCdN8oJus2MDHf_DG9FfL9mas2aq-2Rqqjqp5vJCgGnapS57RuYkwsOlKnJoylmu4xGIih6L2b6EdMMj'
          },
          (r) => {
            if (r) {
              const friends = r.response.items
              commit('setFriendsList', friends)
            }
          }
        )
      })
    }
  },
  namespaced: true
}
