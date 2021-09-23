export default {
    state: {
        statistics: {
            title: "some statistics",
            subtitle: "Showing what your company already acomplished is always a good selling point.",
            info: [
                {
                    number: "409",
                    text: "BIKES SOLD",
                },
                {
                    number: "2012",
                    text: "year the  company started",
                },
                {
                    number: "0",
                    text: "unsatisfied customers",
                },
            ]
        },
    },
    getters: {
        statistics(state) {
            return state.statistics;
        },
    },
    mutations: {
        statistics(state, payload) {
            console.log(state.statistics);
        },
    },
    actions: {
        statistics({ commit, state }, products) {
            console.log(commit.statistics);
        }
    }
}