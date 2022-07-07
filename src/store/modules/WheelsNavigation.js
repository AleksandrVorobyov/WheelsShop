import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
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
        navigationAnim(state, payload) {
            if (window.innerWidth >= 768 && window.innerHeight >= 850) {
                gsap.registerPlugin(ScrollTrigger);

                gsap.from(".navigation-wrap", {
                    scrollTrigger: {
                        trigger: "#navigation",
                        toggleActions: "restart pause play pause",
                    },
                    opacity: .3,
                    duration: 1.5,
                });
            }
        },
    },
    actions: {
        navigation({ commit, state }, products) {
            console.log(commit.navigation);
        }
    }
}