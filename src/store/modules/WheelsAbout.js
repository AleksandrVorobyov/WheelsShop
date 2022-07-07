import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
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
        aboutAnim(state, payload) {
            if (window.innerWidth >= 768 && window.innerHeight >= 850) {
                gsap.registerPlugin(ScrollTrigger);

                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#about",
                        toggleActions: "restart pause play pause",
                    },
                })
    
                let aboutItems = document.querySelectorAll('.about-wrap > *')
    
                aboutItems.forEach((item) => {
                    tl.from(item, {
                        opacity: 0,
                        y: 30,
                        duration: .7,
                    });
                })
            }
        },
    },
    actions: {
        about({ commit, state }, products) {
            console.log(commit.about);
        }
    }
}

