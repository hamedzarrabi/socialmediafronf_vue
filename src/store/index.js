import {createStore} from 'vuex';

export default createStore({

    state: {
        isLoggedIn: false,
        user: {
            firstName: '',
            lastName: '',
            email: '',
            userId: '',
            dateOfBirth: '',
            imageProfile: '',
            roles: ''
        }
    },
    getters: {
        isLoggedIn: (state) => state.isLoggedIn,
        user: (state) => state.user
    },
    mutations: {
        setUser(state, {email, firstName, lastName, userId, dateOdBirth, imageProfile, roles}) {
            state.user.email = email;
            state.user.firstName = firstName;
            state.user.lastName = lastName;
            state.user.userId = userId;
            state.user.imageProfile = imageProfile;
            state.user.dateOfBirh = dateOdBirth;
            state.user.roles = roles;
        }
    },
    actions: {
        setUser({commit}, payload) {
            commit('setUser', payload);
        }
    },
    modules: {}
})


