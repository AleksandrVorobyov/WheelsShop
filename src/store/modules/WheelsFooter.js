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
    footer(state, payload) {
      console.log(state.footer);
    },
  },
  actions: {
    footer({ commit, state }, products) {
      console.log(commit.footer);
    },
  },
};
