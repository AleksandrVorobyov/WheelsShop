import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
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
        statisticsAnim(state, payload) {
            gsap.registerPlugin(ScrollTrigger);

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".statistics__info",
                    toggleActions: "restart pause restart pause",
                },
            })

            gsap.from(".statistics__title", {
                scrollTrigger: {
                    trigger: "#statistics",
                    toggleActions: "restart pause restart pause",
                },
                opacity: 0,
                y: -30,
                duration: .7,
            });
            gsap.from(".statistics__subtitle", {
                scrollTrigger: {
                    trigger: "#statistics",
                    toggleActions: "restart pause restart pause",
                },
                opacity: 0,
                y: -30,
                duration: .7,
            });

            let statisticsInfoItems = document.querySelectorAll('.statistics__info-item')
            statisticsInfoItems.forEach((item) => {
                tl.from(item, {
                    opacity: 0,
                    y: 30,
                    duration: .7,
                });
            })
        },
    },
    actions: {
        statistics({ commit, state }, products) {
            console.log(commit.statistics);
        }
    }
}