<template lang="pug">
section.navigation
  .container--big
    .navigation-wrap
      .navigation__logo
        router-link.navigation__logo-link(to="/") {{ navigation.logo }}
      .navigation__list
        ul.navigation__list-wrap
          li.navigation__list-item(
            v-for="item in navigation.list",
            :key="item"
          )
            router-link.navigation__list-link(:to="item.link") {{ item.text }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["navigation"]),
  },
};
</script>
<style scoped lang="scss">
.navigation {
  position: relative;
  padding: 25px 0;
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

.navigation__list-wrap {
  display: flex;
  align-items: center;
}

.navigation__list-item + .navigation__list-item {
  margin-left: 80px;
}

.navigation__list-link {
  position: relative;
  font-size: 18px;
  font-family: var(--fontMedium);
  color: var(--clrNavLink);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 2px;

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
