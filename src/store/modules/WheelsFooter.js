export default {
    state: {
        footer: {
            title: "footer",
        },
    },
    getters: {
        footer(state) {
            return state.footer;
        },
    },
    mutations: {
        footer(state, payload) {
            console.log(state.footer);
        },
    },
    actions: {
        footer({ commit, state }, products) {
            console.log(commit.footer);
        }
    }
}