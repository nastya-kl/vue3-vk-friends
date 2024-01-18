import useGetToken from '@/components/hooks/useGetToken'
const { token } = useGetToken()

export const userProfileModule = {
  state: {
    user: {},
    posts: [],
    errorMessage: '',
    isUserLoading: false,
    isPostsLoading: false,
    totalPosts: 0
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    setIsUserLoading(state, bool) {
      state.isUserLoading = bool
    },
    setIsPostsLoading(state, bool) {
      state.isPostsLoading = bool
    },
    setErrorMessage(state, message) {
      state.errorMessage = message
    },
    setTotalPosts(state, count) {
      state.totalPosts = count
    }
  },
  actions: {
    async getUserById({ commit }, id) {
      try {
        commit('setIsUserLoading', true)
        const response = await new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          VK.Api.call(
            'users.get',
            {
              user_ids: id,
              fields: ['photo_400_orig', 'posts', 'online'],
              v: '5.131',
              access_token: token
            },
            (r) => {
              if (r) {
                resolve(r)
              } else {
                reject(new Error('Ошибка при загрузке пользователя'))
              }
            }
          )
        })

        const user = response.response[0]
        commit('setUser', user)
      } catch (error) {
        console.error('Ошибка:', error)
      } finally {
        commit('setIsUserLoading', false)
      }
    },
    async getPosts({ commit, state }, id) {
      try {
        commit('setPosts', [])
        commit('setUser', [])
        commit('setIsPostsLoading', true)

        await new Promise((resolve) => setTimeout(resolve, 300));

        const response = await new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          VK.Api.call(
            'wall.get',
            {
              owner_id: id,
              count: 10,
              filter: 'all',
              extended: 1,
              v: '5.131',
              access_token: token
            },
            (r) => {
              if (r) {
                resolve(r)
              } else {
                reject(new Error('Ошибка при загрузке постов'))
              }
            }
          )
        })

        if (state.user.is_closed) {
          commit('setErrorMessage', 'Страница пользователя скрыта настройками приватности')
        } else {
          commit('setErrorMessage', '')
          const posts = response.response.items
          console.log(posts);
          commit('setPosts', posts)
          commit('setTotalPosts', response.response.count)
        }

        if (!state.user.is_closed && state.posts.length === 0) {
          commit('setErrorMessage', 'У данного пользователя нет постов')
        }
      } catch (error) {
        console.error('Ошибка:', error)
      } finally {
        commit('setIsPostsLoading', false)
      }
    },
    loadMorePosts({ commit, state }, id) {
      // eslint-disable-next-line no-undef
      VK.Api.call(
        'wall.get',
        {
          owner_id: id,
          offset: state.posts.length,
          count: 5,
          filter: 'all',
          extended: 1,
          fields: ['photo_max'],
          v: '5.131',
          access_token: token
        },
        (r) => {
          if (r) {
            const posts = r.response.items
            commit('setPosts', [...state.posts, ...posts])
          }
        }
      )
    },
    resetUser({ commit }) {
      commit('setUser', [])
      commit('setPosts', [])
    }
  },
  namespaced: true
}
