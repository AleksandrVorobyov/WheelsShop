import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
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
        teamAnim(state, payload) {
            if (window.innerWidth >= 768 && window.innerHeight >= 850) {
                gsap.registerPlugin(ScrollTrigger);

                gsap.from(".team__title", {
                    scrollTrigger: {
                        trigger: ".team__title",
                        toggleActions: "restart pause play pause",
                    },
                    opacity: 0,
                    y: -30,
                    duration: .7,
                });

                let teamItems = document.querySelectorAll('.team__list-item')

                teamItems.forEach((item) => {
                    let itemImg = item.querySelector(".team__list-img");
                    let itemName = item.querySelector(".team__list-name");
                    let itemMeta = item.querySelector(".team__list-meta");
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".team__list",
                            toggleActions: "restart pause play pause",
                        },
                    })
                    tl.from(itemImg, {
                        opacity: 0,
                        rotation: 360,
                        duration: .7,
                    });
                    tl.from(itemName, {
                        opacity: 0,
                        duration: .7,
                    });
                    tl.from(itemMeta, {
                        opacity: 0,
                        duration: .7,
                    });
                })
            }
        },
    },
    actions: {
        team({ commit, state }, products) {
            console.log(commit.team);
        }
    }
}