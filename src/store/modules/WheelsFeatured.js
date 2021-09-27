import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
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
        featuredCardList(state) {
            if (window.innerWidth >= 870) {
                return state.featured.cards;
            } else {
                const newArray = state.featured.cards;
                newArray.splice(3, 6);
                return state.featured.cards = newArray;
            }
        }
    },
    mutations: {
        featuredCardAnim(_, event) {
            const cardItem = event.target,
                halfHeight = cardItem.offsetHeight / 2,
                halfWidth = cardItem.offsetWidth / 2;
            cardItem.style.transform =
                "rotateX(" +
                -(event.offsetY - halfHeight) / 5 +
                "deg) rotateY(" +
                (event.offsetX - halfWidth) / 5 +
                "deg)";
        },

        featuredCardStop(_, event) {
            const cardItem = event.target;
            cardItem.style.transform = "rotateX(0)";
        },
        featuredAnim() {
            gsap.registerPlugin(ScrollTrigger);

            gsap.from(".featured__title", {
                scrollTrigger: {
                    trigger: ".featured__title",
                    toggleActions: "restart pause restart pause",
                },
                y: -30,
                opacity: 0,
                duration: .9,
            });

            let featuredCards = document.querySelectorAll('.featured__cards-item')

            featuredCards.forEach((item) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        toggleActions: "restart pause restart pause",
                    },
                    opacity: 0,
                    scale: 0,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.4)"
                });
            })
        }
    },
    actions: {
        featured({ commit, state }, products) {
            console.log(commit.featured);
        },
    }
}