<template lang="pug">
wheels-sidebar
#page.page
  router-view
</template>

<script>
import WheelsSidebar from "./components/WheelsSidebar.vue";

export default {
  components: {
    WheelsSidebar,
  },
};
</script>

<style lang="scss">
:root {
  --bgHeader: #0b0b0b;
  --bgSectionWhite: #ffffff;
  --bgSectionBlack: #000;
  --bgSectTeam: #ededed;
  --bgSidebar: #3b3b3b;
  --bgFooter: #1e1e1e;

  --clrSectTtl: #1d1d1d;
  --clrSectTxt: #3b3b3b;
  --clrHeadTtl: #ededed;
  --clrNavLogo: #1c1c1c;
  --clrNavLink: #3b3b3b;
  --clrAbtTtl: #1d1d1d;
  --clrAbtTxt: #3b3b3b;
  --clrStatTtl: #ededed;
  --clrFtrdTtl: #1e1e1e;
  --clrFtrdTxt: #3b3b3b;
  --clrTeamTtl: #1e1e1e;
  --clrSclTtl: #3b3b3b;
  --clrFtrLogo: #ededed;
  --clrFtrSub: #9d9d9d;
  --clrSidebarTtl: #1e1e1e;
  --clrSidebarActive: #ff0000;

  --clrShadowNav: #eaeaea;

  --fontBold: "Raleway-Bold";
  --fontMedium: "Raleway-Medium";
  --fontRegular: "Raleway-Regular";
  --fontLight: "Raleway-Light";
  --fontLightItalic: "Raleway-Light-Italic";
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

#app {
  position: relative;
  display: flex;
}

#page {
  position: relative;
  width: 100%;
  transition: all 0.4s linear;
}

html,
body {
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  font-family: var(--fontRegular);
  color: var(--black);
  line-height: 1;
  font-size: 16px;
  font-weight: 400;
}

@media (max-width: 1780px) {
  body.hidden {
    position: fixed;
    overflow: hidden;
  }

  #page.page--close {
    &::before {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      background: #000;
      opacity: 0.4;
      z-index: 1500;
    }
  }
}

@media (min-width: 1780px) {
  #page.page--close {
    margin-left: 400px;
    width: calc(100% - 400px);
  }
}

input,
textarea {
  font-size: 16px;
  line-height: 1.5;
  resize: vertical;
  -webkit-appearance: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  pointer-events: none;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.container--big {
  max-width: 1560px;
  margin: auto;
  padding: 0 15px;
}

.container {
  max-width: 1375px;
  margin: auto;
  padding: 0 15px;
}
</style>
