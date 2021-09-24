<template lang="pug">
section.social
  .container--big
    .social-wrap
      .social__title
        section-title(:title="social.title", :subtitle="social.subtitle")
      .social__case
        router-link.social__case-img(
          v-for="item in social.case",
          :key="item",
          :to="item.link"
        )
          img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
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
  padding: 100px 0;
  overflow: hidden;
  z-index: 500;
  background: white;
}

.social-wrap {
  position: relative;
}

.social__title {
  margin-bottom: 50px;
}

.social__case {
  display: grid;
  grid-template-columns: repeat(4, 395px);
  grid-template-rows: 395px;
  margin-bottom: 50px;
}

.social__case-img {
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.social__appeal-title {
  font-size: 24px;
  font-family: var(--fontBold);
  color: var(--clrSclTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 2px;
}
</style>
