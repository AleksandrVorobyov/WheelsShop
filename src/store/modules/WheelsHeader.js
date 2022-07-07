import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

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
        headerAnim(state, payload) {
            if (window.innerWidth >= 768 && window.innerHeight >= 850) {
                gsap.registerPlugin(ScrollTrigger);

                gsap.from(".header__body", {
                    scrollTrigger: {
                        trigger: ".header__body",
                        toggleActions: "restart pause play pause",
                    },
                    opacity: .5,
                    x: 100,
                    duration: 1.5,
                });

                gsap.from(".header__nav", {
                    scrollTrigger: {
                        trigger: ".header__nav",
                        toggleActions: "restart pause play pause",
                    },
                    opacity: .5,
                    y: -100,
                    duration: 1.5,
                });
            }
        },
    },
    actions: {
        header({ commit, state }, products) {
            console.log(commit.header);
        }
    }
}