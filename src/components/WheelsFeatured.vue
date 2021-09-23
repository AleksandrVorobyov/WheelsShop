<template lang="pug">
section.featured
  .container
    .featured-wrap
      .featured__title
        section-title(:title="featured.title", :subtitle="featured.subtitle")
      ul.featured__cards
        li.featured__cards-item(v-for="item in featured.cards", :key="item")
          .featured__cards-img
            img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
          h4.featured__cards-title {{ item.title }}
          p.featured__cards-price {{ item.price }}
          router-link.featured__cards-link(:to="item.link") {{ item.linkText }}
</template>
<script>
import { mapGetters } from "vuex";
import sectionTitle from "./parts/section-title.vue";
export default {
  computed: {
    ...mapGetters(["featured"]),
  },
  components: {
    sectionTitle,
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
  grid-template-columns: 400px 400px 400px;
  grid-template-rows: 400px 400px;
  gap: 40px;
  justify-content: space-between;
}

.featured__cards-item {
  position: relative;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    content: "";
    background: linear-gradient(#00000066, #00000066),
      url("~@/assets/img/featured/card-bg.jpg") bottom left / cover no-repeat;
    background-attachment: fixed;
    background-position: center;
    transition: height 0.5s ease-in-out;
    opacity: 0.8;
    border-radius: 20px;
    z-index: -100;
  }

  &::after {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: calc(100% - 40px);
    height: 0;
    content: "";
    background: #fff;
    transition: height 0.5s ease-in-out;
    z-index: -50;
    border-radius: 20px;
  }

  &:hover::before {
    height: 100%;
  }

  &:hover::after {
    height: calc(100% - 40px);
  }
}

.featured__cards-img {
  position: relative;
  display: block;
  width: 400px;
  height: 270px;

  img {
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    object-fit: contain;
    object-position: center;
  }
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
}

.featured__cards-title {
  margin-bottom: 10px;
}

.featured__cards-price {
  margin: 0;
  margin-bottom: 20px;
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
}
</style>
