export default {
    state: {
        social: {
            title: "#social showcase",
            subtitle: "Show your customers why your Instagram account is the one they should follow "
        },
    },
    getters: {
        social(state) {
            return state.social;
        },
    },
    mutations: {
        social(state, payload) {
            console.log(state.social);
        },
    },
    actions: {
        social({ commit, state }, products) {
            console.log(commit.social);
        }
    }
}