import {createStore} from 'vuex'

export const store = createStore({
  state() {
    return {
      title: 'This is Composition + Vuex'
    }
  },
  getters: {
    appTitle(state) {
      return state.title
    }
  }
})