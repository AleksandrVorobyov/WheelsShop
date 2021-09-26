<template lang="pug">
section.featured
  .container
    .featured-wrap
      .featured__title
        section-title(:title="featured.title", :subtitle="featured.subtitle")
      ul.featured__cards
        li.featured__cards-item(v-for="item in featuredCardList", :key="item")
          a.featured__cards-item-wrap(
            :href="item.link",
            @mousemove="featuredCardAnim($event)",
            @mouseout="featuredCardStop($event)"
          )
            img.featured__cards-img(
              :src="require('@/assets/img/' + item.src)",
              :alt="item.alt"
            )
            h4.featured__cards-title {{ item.title }}
            p.featured__cards-price {{ item.price }}
            a.featured__cards-link(:href="item.link") {{ item.linkText }}
</template>
<script>
import { mapGetters } from "vuex";
import sectionTitle from "./parts/section-title.vue";
export default {
  computed: {
    ...mapGetters(["featured", "featuredCardList"]),
  },
  components: {
    sectionTitle,
  },
  methods: {
    featuredCardAnim(event) {
      this.$store.commit("featuredCardAnim", event);
    },
    featuredCardStop(event) {
      this.$store.commit("featuredCardStop", event);
    },
  },
};
</script>
<style scoped lang="scss">
.featured {
  position: relative;
  padding: 50px 0 70px;
  overflow: hidden;
  z-index: 500;
  background: var(--bgSectionWhite);
}

.featured-wrap {
  position: relative;
}

.featured__title {
  margin-bottom: 40px;
}

.featured__cards {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(300px, 400px) minmax(300px, 400px) minmax(
      300px,
      400px
    );
  gap: 40px;
  justify-content: center;

  @media (min-width: 480px) {
    grid-template-columns: 400px;
    grid-template-rows: 400px 400px 400px;
  }

  @media (min-width: 870px) {
    grid-template-columns: 400px 400px;
    grid-template-rows: 400px 400px 400px;
  }

  @media (min-width: 1360px) {
    grid-template-columns: 400px 400px 400px;
    grid-template-rows: 400px 400px;
    justify-content: space-between;
  }
}

.featured__cards-item {
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.featured__cards-item-wrap {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
  transition: transform 0.3s linear;
  padding-top: 10px;

  & > * {
    pointer-events: none;
  }

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(#00000066, #00000066),
      url("~@/assets/img/featured/card-bg.jpg") bottom left / cover no-repeat;
    background-position: center;
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
    z-index: -100;
    filter: drop-shadow(2px 4px 6px #00000066);
  }

  &::after {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    content: "";
    background: #ffffffbd;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: -50;
  }

  &:hover::before {
    opacity: 0.8;
  }

  &:hover::after {
    opacity: 1;
  }
}

.featured__cards-img {
  position: relative;
  display: block;
  width: 300px;
  height: 250px;
  transform: translateZ(100px);
  object-fit: contain;
  object-position: center;
}

.featured__cards-title,
.featured__cards-price {
  font-size: 24px;
  font-family: var(--fontBold);
  color: var(--clrFtrdTxt);
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 2px;
  transition: color 0.5s ease-in-out;
  transform: translateZ(50px);
}

.featured__cards-title {
  margin-bottom: 10px;
}

.featured__cards-price {
  margin: 0;
  margin-bottom: 20px;
  transform: translateZ(50px);
}

.featured__cards-link {
  display: block;
  font-size: 18px;
  font-family: var(--fontMedium);
  color: var(--clrFtrdTxt);
  font-weight: bold;
  text-decoration: underline;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 2px;
  transition: color 0.5s ease-in-out;
  transform: translateZ(50px);
}
</style>
