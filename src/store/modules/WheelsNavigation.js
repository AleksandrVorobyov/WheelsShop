export default {
    state: {
        navigation: {
            logo: "wheels",
            list: [
                {
                    link: '/',
                    text: 'home'
                },
                {
                    link: '/about',
                    text: 'about us'
                },
                {
                    link: '/products',
                    text: 'products'
                },
                {
                    link: '/team',
                    text: 'our team'
                },
                {
                    link: '/blog',
                    text: 'blog'
                },
                {
                    link: '/contact',
                    text: 'contact'
                },
            ],
        },
    },
    getters: {
        navigation(state) {
            return state.navigation;
        },
    },
    mutations: {
        navigation(state, payload) {
            console.log(state.navigation);
        },
    },
    actions: {
        navigation({ commit, state }, products) {
            console.log(commit.navigation);
        }
    }
}