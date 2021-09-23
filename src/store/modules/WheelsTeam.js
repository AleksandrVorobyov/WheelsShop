export default {
    state: {
        team: {
            title: "meet the team",
            subtitle: "People who make the magic happen",
            list: [
                {
                    src: "team/ian.jpg",
                    alt: "ian",
                    name: "ian",
                    meta: "Founder, CEO",
                },
                {
                    src: "team/sarah.jpg",
                    alt: "sarah",
                    name: "sarah",
                    meta: "designer",
                },
                {
                    src: "team/juan.jpg",
                    alt: "juan",
                    name: "juan",
                    meta: "office wizard",
                },
            ]
        },
    },
    getters: {
        team(state) {
            return state.team;
        },
    },
    mutations: {
        team(state, payload) {
            console.log(state.team);
        },
    },
    actions: {
        team({ commit, state }, products) {
            console.log(commit.team);
        }
    }
}