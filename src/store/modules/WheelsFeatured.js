export default {
    state: {
        featured: {
            title: "featured products",
            subtitle: "Your chance to shine",
            cards: [
                {
                    src: "featured/orange-bike.png",
                    alt: "wheels-orange",
                    title: "Orangez",
                    price: "$399",
                    link: "#",
                    linkText: "Learn more",
                },
                {
                    src: "featured/green-bike.png",
                    alt: "wheels-green",
                    title: "GREEN DEVIL",
                    price: "$399",
                    link: "#",
                    linkText: "Learn more",
                },
                {
                    src: "featured/blue-bike.png",
                    alt: "wheels-blue",
                    title: "blue lagoon",
                    price: "$399",
                    link: "#",
                    linkText: "Learn more",
                },
                {
                    src: "featured/pink-bike.png",
                    alt: "wheels-pink",
                    title: "pink lady",
                    price: "$399",
                    link: "#",
                    linkText: "Learn more",
                },
                {
                    src: "featured/purple-bike.png",
                    alt: "wheels-purple",
                    title: "purple rain",
                    price: "$399",
                    link: "#",
                    linkText: "Learn more",
                },
                {
                    src: "featured/grey-bike.png",
                    alt: "wheels-grey",
                    title: "the mist",
                    price: "$399",
                    link: "#",
                    linkText: "Learn more",
                },
            ]
        },
    },
    getters: {
        featured(state) {
            return state.featured;
        },
    },
    mutations: {
        featured(state, payload) {
            console.log(state.featured);
        },
    },
    actions: {
        featured({ commit, state }, products) {
            console.log(commit.featured);
        }
    }
}