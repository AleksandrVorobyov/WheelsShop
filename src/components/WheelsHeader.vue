<template lang="pug">
section.header
  .container--big
    .header-wrap
      .header__nav
        .header__nav-logo
          router-link.header__nav-logo-title(to="/") {{ header.logo }}
        .header__nav-menu
          burger-sidebar(:text="header.menu", @action="sidebarUnlock()")
      .header__body
        h2.header__body-title {{ header.title }}
        p.header__body-text {{ header.text }}
        h6.header__body-author {{ header.author }}
</template>
<script>
import { mapGetters } from "vuex";
import burgerSidebar from "./parts/burger-sidebar.vue";
export default {
  computed: {
    ...mapGetters(["header"]),
  },
  components: {
    burgerSidebar,
  },
  methods: {
    sidebarUnlock() {
      this.$store.commit("sidebarUnlock");
    },
    headerAnim() {
      this.$store.commit("headerAnim");
    },
  },
  mounted() {
    this.headerAnim();
  },
};
</script>
<style scoped lang="scss">
.header {
  position: relative;
  padding: 50px 0;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  z-index: 500;
  background: url("~@/assets/img/header/bg-header.jpg") bottom center / cover
      no-repeat,
    linear-gradient(var(--bgHeader), var(--bgHeader));
  background-attachment: fixed;

  @media (min-width: 360px) {
    padding: 115px 0 90px;
  }

  &::before {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 45px;
    height: 65px;
    content: url("~@/assets/img/header/mouse-icon.png");

    @media (min-width: 360px) {
      animation: mouseUp 3s linear 0s infinite alternate;
      bottom: 90px;
    }
  }
}

.header-wrap {
  position: relative;
}

.header__nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;

  @media (min-width: 360px) {
    margin-bottom: 120px;
  }

  @media (min-width: 480px) {
    margin-bottom: 200px;
  }

  @media (min-width: 720px) {
    margin-bottom: 300px;
  }
}

.header__nav-logo-title {
  font-size: 26px;
  font-family: var(--fontBold);
  color: var(--clrHeadTtl);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (min-width: 480px) {
    font-size: 30px;
  }
}

.header__body {
  max-width: 670px;
  margin-left: auto;
  text-align: center;

  @media (min-width: 480px) {
    text-align: right;
  }
}

.header__body-title {
  margin-bottom: 15px;
  font-size: 28px;
  font-family: var(--fontBold);
  color: var(--clrHeadTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: 4px;

  @media (min-width: 480px) {
    font-size: 34px;
  }

  @media (min-width: 720px) {
    font-size: 48px;
  }
}

.header__body-text {
  margin-bottom: 10px;
  max-width: 400px;
  margin: 0;
  margin-left: auto;
  font-size: 20px;
  font-family: var(--fontLight);
  font-weight: 300;
  color: var(--clrHeadTtl);
  line-height: 1.6;
  letter-spacing: 2px;

  @media (min-width: 720px) {
    font-size: 24px;
  }
}

.header__body-author {
  font-size: 18px;
  font-family: var(--fontLightItalic);
  color: var(--clrHeadTtl);
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 2px;

  @media (min-width: 720px) {
    font-size: 20px;
  }
}

@keyframes mouseUp {
  from {
    bottom: 50px;
  }
  to {
    bottom: 90px;
  }
}
</style>
