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
    social(state, payload) {
      console.log(state.social);
    },
  },
  actions: {
    social({ commit, state }, products) {
      console.log(commit.social);
    },
  },
};
