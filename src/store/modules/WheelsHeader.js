export default {
    state: {
        header: {
            logo: "wheels",
            menu: "MENU",
            title: "Welcome to wheels",
            text: "Your free psd template, perfect for your next big idea",
            author: "by Pawel Betkowski"
        },
    },
    getters: {
        header(state) {
            return state.header;
        },
    },
    mutations: {
        header(state, payload) {
            console.log(state.header);
        },
    },
    actions: {
        header({ commit, state }, products) {
            console.log(commit.header);
        }
    }
}