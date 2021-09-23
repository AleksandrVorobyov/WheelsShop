export default {
    state: {
        about: {
            title: "about us",
            subtitle: "let’s talk about what makes your company great.",
            src: "about/wheels.png",
            alt: "wheels",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio molestie, rutrum lacus et, suscipit sem. Fusce eu tristique neque. Nullam in euismod magna. Vestibulum fermentum a dui non vulputate. Morbi hendrerit rhoncus velit at pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quis sapien neque. Nunc pulvinar vel velit eget porttitor. Sed at sapien luctus nulla lobortis ullamcorper. Proin sit amet nulla quis libero dictum tempor eget in dui. Proin posuere eleifend vehicula.",
        },
    },
    getters: {
        about(state) {
            return state.about;
        },
    },
    mutations: {
        about(state, payload) {
            console.log(state.about);
        },
    },
    actions: {
        about({ commit, state }, products) {
            console.log(commit.about);
        }
    }
}

