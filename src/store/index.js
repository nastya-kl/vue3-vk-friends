import { createStore } from 'vuex'
import { userModule } from '@/store/userModule'
import { friendsModule } from '@/store/friendsModule'
import { userProfileModule } from '@/store/userProfileModule'
import { searchUsersModule } from '@/store/searchUsersModule'

export default createStore({
  modules: {
    user: userModule,
    friend: friendsModule,
    profile: userProfileModule,
    search: searchUsersModule
  }
})
