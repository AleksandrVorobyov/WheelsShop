<template lang="pug">
section#sidebar.sidebar
  .container
    .sidebar-wrap
      .sidebar__logo
        h2.sidebar__logo-title {{ sidebar.title }}
      .sidebar__menu
        ul.sidebar__menu-list
          li.sidebar__menu-list-item(v-for="item in sidebar.menu")
            router-link(:to="item.link", @click="scrollTop(), sidebarRem()")
              component(:is="item.src")
              h3.sidebar__menu-list-text {{ item.text }}
      .sidebar__form
        button.sidebar__form-btn(@mousemove="btnLogAnim($event)")
          span {{ sidebar.login }}

        button.sidebar__form-btn(@mousemove="btnLogAnim($event)") 
          span {{ sidebar.sign }}

      button.sidebar__exit(@click="sidebarUnlock()")
</template>
<script>
import { mapGetters } from "vuex";
import sidebarSvg from "./parts/sidebar-svg.vue";
import iconHome from "@/assets/img/icons/home.vue";
import iconAbout from "@/assets/img/icons/about.vue";
import iconBlog from "@/assets/img/icons/blog.vue";
import iconContact from "@/assets/img/icons/contact.vue";
import iconProduct from "@/assets/img/icons/product.vue";
import iconTeam from "@/assets/img/icons/team.vue";

export default {
  computed: {
    ...mapGetters(["sidebar"]),
  },
  components: {
    sidebarSvg,
    iconHome,
    iconAbout,
    iconBlog,
    iconContact,
    iconProduct,
    iconTeam,
  },
  methods: {
    sidebarUnlock() {
      this.$store.commit("sidebarUnlock");
    },
    sidebarRem() {
      this.$store.commit("sidebarUnlock");
    },
    btnLogAnim(event) {
      this.$store.commit("btnLogAnim", event);
    },
    scrollTop() {
      this.$store.commit("scrollTop");
    },
  },
};
</script>
<style scoped lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  padding: 100px 0px;
  width: 0px;
  height: 100vh;
  overflow: hidden;
  z-index: 2000;
  background: linear-gradient(rgba(39, 39, 39, 0.97), rgba(39, 39, 39, 0.97)),
    url("~@/assets/img/sidebar/sidebar.jpg") top left / cover no-repeat;
  transition: all 0.4s linear;
}

.sidebar--active {
  width: 100%;
  padding: 100px 30px;

  @media (min-width: 480px) {
    width: 400px;
  }

  .sidebar-wrap {
    opacity: 1;
  }
}

.sidebar-wrap {
  opacity: 0;
  transition: all 0.4s linear;
}

.sidebar__logo-title {
  margin-bottom: 30px;
  font-size: 34px;
  font-family: var(--fontBold);
  color: var(--clrHeadTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 2px;
  text-align: center;
}

.sidebar__menu {
  margin-bottom: 10px;
}

.sidebar__menu-list-item + .sidebar__menu-list-item {
  margin-top: 10px;
}

.sidebar__menu-list-item a {
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  padding: 10px 20px;
  font-size: 18px;
  font-family: var(--fontBold);
  color: var(--clrHeadTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  transition: all 0.3s linear;
  letter-spacing: 2px;
  overflow: hidden;
  z-index: 100;

  &::before {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-left: 6px solid #fff;
    content: "";
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: rgb(37, 37, 37);
    content: "";
    transition: all 0.3s linear;
    z-index: -1;
    opacity: 0;
  }

  svg,
  svg * {
    height: 40px;
    width: 40px;
    fill: #fff;
    margin-right: 10px;
    transition: all 0.3s linear;
  }

  &:hover {
    color: #ff0000;

    &::before {
      border-left: 6px solid #ff0000;
      transition: all 0.3s linear;
    }
    &::after {
      width: 400px;
      height: 400px;
      opacity: 1;
    }
  }

  &:hover svg {
    fill: #ff0000;
  }
}

.sidebar__menu-list-item a.router-link-active {
  color: #ff0000;

  svg {
    fill: #ff0000;
  }

  &::before {
    border-left: 6px solid #ff0000;
  }
  &::after {
    width: 400px;
    height: 400px;
    opacity: 1;
  }
}

.sidebar__menu-list-img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  object-fit: contain;
  object-position: center;
}

.sidebar__exit {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(-45deg);
    width: 100%;
    height: 4px;
    content: "";
    background: #fff;
    transition: all 0.3s linear;
    pointer-events: none;
  }

  &::after {
    position: absolute;
    bottom: 50%;
    left: 0;
    transform: translateY(50%) rotate(45deg);
    width: 100%;
    height: 4px;
    content: "";
    background: #fff;
    transition: all 0.3s linear;
    pointer-events: none;
  }

  &:hover {
    &::after,
    &::before {
      background: #ff0000;
    }
  }
}

.sidebar__form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.sidebar__form-btn {
  position: relative;
  padding: 10px 20px;
  height: 60px;
  background: rgb(37, 37, 37);
  font-size: 18px;
  font-family: var(--fontBold);
  color: var(--clrHeadTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 2px;
  overflow: hidden;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;

  &::before {
    --size: 0;

    content: "";
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #ff0000, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
    z-index: -1;
  }

  span {
    pointer-events: none;
  }

  &:hover::before {
    --size: 400px;
  }
}
</style>