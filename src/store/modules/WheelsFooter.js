import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    footer: {
      logo: "wheelz",
      subtitle: [
        "A free psd template by Pawel Betkowski",
        "all feedback appreciated, say helo@betkowski.co.uk",
      ],
      list: [
        {
          title: "quick links",
          links: [
            {
              text: "About us",
              link: "#",
            },
            {
              text: "products",
              link: "#",
            },
            {
              text: "services",
              link: "#",
            },
            {
              text: "our team",
              link: "#",
            },
            {
              text: "blog",
              link: "#",
            },
            {
              text: "contact",
              link: "#",
            },
          ],
        },
        {
          title: "quick link 2",
          links: [
            {
              text: "faq",
              link: "#",
            },
            {
              text: "terms & Conditions",
              link: "#",
            },
            {
              text: "something else",
              link: "#",
            },
            {
              text: "anything",
              link: "#",
            },
            {
              text: "your ideas",
              link: "#",
            },
            {
              text: "right here",
              link: "#",
            },
          ],
        },
        {
          title: "let’s get social!",
          social: [
            {
              src: "icons/facebook.png",
              link: "#",
            },
            {
              src: "icons/instagram.png",
              link: "#",
            },
            {
              src: "icons/linked-in.png",
              link: "#",
            },
            {
              src: "icons/twitter.png",
              link: "#",
            },
          ],
        },
        {
          map: "footer/map.jpg",
        },
      ],
    },
  },
  getters: {
    footer(state) {
      return state.footer;
    },
  },
  mutations: {
    footerAnim(state, payload) {
      if (window.innerWidth >= 768 && window.innerHeight >= 1024) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.footer__head', {
          scrollTrigger: {
            trigger: ".footer__head",
            toggleActions: "restart pause play pause",
          },
          opacity: 0,
          y: -30,
          duration: .7,
        });

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer__list",
            toggleActions: "restart pause play pause",
          },
        })

        let socialItems = document.querySelectorAll('.footer__list-col')

        socialItems.forEach((item) => {
          tl.from(item, {
            opacity: 0,
            scale: 0,
            duration: .7,
            ease: "elastic.out(.5, 0.3)"
          });
        })
      }
    },
  },
  actions: {
    footer({ commit, state }, products) {
      console.log(commit.footer);
    },
  },
};
