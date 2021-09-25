const SET_AUTH_USER = 'SET_AUTH_USER'

export const state = () => ({
  user: undefined,
})

export const mutations = {
  [SET_AUTH_USER](state, user) {
    state.user = user
  },
}

export const actions = {
  initAuth({}, payload) {}
}

export const getters = {
    isLoggedIn(){
        return true
    }
}
