<template lang="pug">
section.navigation
  .container--big
    .navigation-wrap
      .navigation__logo
        router-link.navigation__logo-link(to="/") {{ navigation.logo }}
      .navigation__burger
        burger-sidebar(:text="header.menu", @action="sidebarUnlock()")
      .navigation__list
        ul.navigation__list-wrap
          li.navigation__list-item(
            v-for="item in navigation.list",
            :key="item"
          )
            router-link.navigation__list-link(
              :to="item.link",
              @click="scrollTop()"
            ) {{ item.text }}
</template>
<script>
import { mapGetters } from "vuex";
import burgerSidebar from "./parts/burger-sidebar.vue";
export default {
  computed: {
    ...mapGetters(["navigation", "header"]),
  },
  components: {
    burgerSidebar,
  },
  methods: {
    scrollTop() {
      this.$store.commit("scrollTop");
    },
    sidebarUnlock() {
      this.$store.commit("sidebarUnlock");
    },
  },
};
</script>
<style scoped lang="scss">
.navigation {
  position: relative;
  overflow: hidden;
  z-index: 1000;
  background: var(--bgSectionWhite);
  box-shadow: 0px 10px 20px var(--clrShadowNav);
}

.navigation-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.navigation__logo-link {
  font-size: 30px;
  font-family: var(--fontBold);
  color: var(--clrNavLogo);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 2px;
}

.navigation__burger {
  display: block;

  @media (min-width: 720px) {
    display: none;
  }
}

.navigation__list {
  display: none;
  padding: 25px 0;

  @media (min-width: 720px) {
    display: flex;
  }
}

.navigation__list-wrap {
  display: flex;
  align-items: center;
}

.navigation__list-item + .navigation__list-item {
  margin-left: 15px;

  @media (min-width: 970px) {
    margin-left: 30px;
  }

  @media (min-width: 1360px) {
    margin-left: 80px;
  }
}

.navigation__list-link {
  position: relative;
  font-size: 12px;
  font-family: var(--fontMedium);
  color: var(--clrNavLink);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 2px;

  @media (min-width: 770px) {
    font-size: 14px;
  }

  @media (min-width: 870px) {
    font-size: 16px;
  }

  @media (min-width: 970px) {
    font-size: 18px;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 2px;
    width: 0px;
    transition: width 0.4s ease-in-out;
    background: var(--clrNavLink);
    pointer-events: none;
  }

  &::before {
    top: -5px;
    left: 0;
  }

  &::after {
    bottom: -5px;
    right: 0;
  }

  &:hover {
    &::before,
    &::after {
      width: 100%;
    }
  }
}

.router-link-active.navigation__list-link {
  &::before,
  &::after {
    width: 100%;
  }
}
</style>
