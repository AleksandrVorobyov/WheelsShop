import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    social: {
      title: "#social showcase",
      subtitle:
        "Show your customers why your Instagram account is the one they should follow ",
      appeal: "follow @wheelz on instagram",
      case: [
        {
          src: "social/01.jpg",
          alt: "social-img-01",
          link: "#",
        },
        {
          src: "social/02.jpg",
          alt: "social-img-02",
          link: "#",
        },
        {
          src: "social/03.jpg",
          alt: "social-img-03",
          link: "#",
        },
        {
          src: "social/04.jpg",
          alt: "social-img-04",
          link: "#",
        },
      ],
    },
  },
  getters: {
    social(state) {
      return state.social;
    },
  },
  mutations: {
    socialAnim(state, payload) {
      if (window.innerWidth >= 768 && window.innerHeight >= 1024) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from('.social__title', {
        scrollTrigger: {
          trigger: ".social__title",
          toggleActions: "restart pause play pause",
        },
        opacity: 0,
        y: -30,
        duration: .7,
      });

      gsap.from('.social__appeal', {
        scrollTrigger: {
          trigger: ".social__appeal",
          toggleActions: "restart pause play pause",
        },
        opacity: 0,
        y: 30,
        duration: .7,
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".social__case",
          toggleActions: "restart pause play pause",
        },
      })

      let socialItems = document.querySelectorAll('.social__case-img')

      socialItems.forEach((item) => {
        tl.from(item, {
          opacity: 0,
          scale: 0,
          duration: .7,
        });
      })
    }
    },
  },
  actions: {
    social({ commit, state }, products) {
      console.log(commit.social);
    },
  },
};
