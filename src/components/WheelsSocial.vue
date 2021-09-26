<template lang="pug">
section.social
  .container--big
    .social-wrap
      .social__title
        section-title(:title="social.title", :subtitle="social.subtitle")
      .social__case
        router-link.social__case-img(
          to="#",
          v-for="item in social.case",
          :key="item",
          :to="item.link"
        )
          img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
          span Open
      .social__appeal
        h4.social__appeal-title {{ social.appeal }}
</template>
<script>
import { mapGetters } from "vuex";
import sectionTitle from "./parts/section-title.vue";
export default {
  computed: {
    ...mapGetters(["social"]),
  },
  components: {
    sectionTitle,
  },
};
</script>
<style scoped lang="scss">
.social {
  position: relative;
  padding: 50px 0;
  overflow: hidden;
  z-index: 500;
  background: white;

  @media (min-width: 480px) {
    padding: 100px 0;
  }
}

.social-wrap {
  position: relative;
}

.social__title {
  margin-bottom: 50px;
}

.social__case {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 395px));
  grid-template-rows: minmax(200px, 200px) minmax(200px, 200px);
  gap: 10px;
  margin-bottom: 50px;
  justify-content: center;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, minmax(100px, 395px));
    grid-template-rows: minmax(200px, 300px) minmax(200px, 300px);
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(200px, 395px));
    grid-template-rows: minmax(200px, 395px) minmax(200px, 395px);
  }

  @media (min-width: 970px) {
    grid-template-columns: repeat(2, 395px);
    grid-template-rows: 395px 395px;
  }

  @media (min-width: 1360px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 395px;
  }
}

.social__case-img {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 25px;
    display: block;
    background: rgb(216, 213, 213);
    font-size: 24px;
    font-family: var(--fontBold);
    color: var(--clrSclTtl);
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: transform 0.4s ease-in-out, top 0.4s ease-in-out;
    z-index: 10;
    pointer-events: none;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: radial-gradient(
      circle,
      rgba(2, 0, 36, 0) 5%,
      rgba(2, 2, 29, 0.8631827731092436) 58%,
      rgba(31, 34, 34, 0.8631827731092436) 87%
    );
    z-index: 5;
    opacity: 0;
    transition: opacity 0.4s linear;
    pointer-events: none;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    span {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}

.social__appeal-title {
  font-size: 20px;
  font-family: var(--fontBold);
  color: var(--clrSclTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 2px;

  @media (min-width: 480px) {
    font-size: 24px;
  }
}
</style>
