import { createStore } from 'vuex'

const persistedState = {
    name: localStorage.getItem('name') || '',
    email: localStorage.getItem('email') || ''
}

const store = createStore({
    state: persistedState,
    mutations: {
        UPDATE_USER_INFO(state, { name, email }) {
            state.name = name
            state.email = email
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
        },
    },
    actions: {
        updateUserInfo({ commit }, userInfo) {
            commit("UPDATE_USER_INFO", userInfo)
        },
    }
})

export default store