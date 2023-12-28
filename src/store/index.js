import { createStore } from 'vuex'
import { userModule } from '@/store/userModule'
import { friendsModule } from '@/store/friendsModule'

export default createStore({
  modules: {
    user: userModule,
    friend: friendsModule
  }
})
