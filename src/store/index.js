import { createStore } from 'vuex'
import { userModule } from '@/store/userModule'

export default createStore({
  modules: {
    post: userModule
  }
})
