<template lang="pug">
section.header
  .container--big
    .header-wrap
      .header__nav
        .header__nav-logo
          router-link.header__nav-logo-title(to="/") {{ header.logo }}
        .header__nav-menu
          button.header__nav-menu-button
            span {{ header.menu }}
      .header__body
        h2.header__body-title {{ header.title }}
        p.header__body-text {{ header.text }}
        h6.header__body-author {{ header.author }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["header"]),
  },
};
</script>
<style scoped lang="scss">
.header {
  position: relative;
  padding: 115px 0 90px;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  z-index: 500;
  background: url("~@/assets/img/header/bg-header.jpg") bottom center / cover
      no-repeat,
    linear-gradient(var(--bgHeader), var(--bgHeader));
  background-attachment: fixed;

  &::before {
    position: absolute;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%);
    width: 45px;
    height: 65px;
    content: url("~@/assets/img/header/mouse-icon.png");
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
  margin-bottom: 300px;
}

.header__nav-logo-title {
  font-size: 30px;
  font-family: var(--fontBold);
  color: var(--clrHeadTtl);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.header__nav-menu-button {
  position: relative;
  padding: 0;
  padding-right: 25px;
  font-size: 28px;
  font-family: var(--fontBold);
  color: var(--clrHeadTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 0.6;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  letter-spacing: 2px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    height: 4px;
    width: 20px;
    content: "";
    background: var(--clrHeadTtl);
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 4px;
    width: 20px;
    content: "";
    background: var(--clrHeadTtl);
  }

  span::before {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 20px;
    content: "";
    background: var(--clrHeadTtl);
  }
}

.header__body {
  max-width: 670px;
  margin-left: auto;
  text-align: right;
}

.header__body-title {
  margin-bottom: 15px;
  font-size: 48px;
  font-family: var(--fontBold);
  color: var(--clrHeadTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: 4px;
}

.header__body-text {
  margin-bottom: 10px;
  max-width: 400px;
  margin: 0;
  margin-left: auto;
  font-size: 24px;
  font-family: var(--fontLight);
  font-weight: 300;
  color: var(--clrHeadTtl);
  line-height: 1.6;
  text-align: right;
  letter-spacing: 2px;
}

.header__body-author {
  font-size: 20px;
  font-family: var(--fontLightItalic);
  color: var(--clrHeadTtl);
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 2px;
}
</style>
