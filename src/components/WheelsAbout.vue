<template lang="pug">
section#about.about
  .container
    .about-wrap
      .about__title
        section-title(:title="about.title", :subtitle="about.subtitle")
      .about__img
        img(:src="require('@/assets/img/' + about.src)", :alt="about.alt")
      p.about__text {{ about.text }}
</template>
<script>
import { mapGetters } from "vuex";
import sectionTitle from "./parts/section-title.vue";
export default {
  computed: {
    ...mapGetters(["about"]),
  },
  components: {
    sectionTitle,
  },
  methods: {
    aboutAnim() {
      this.$store.commit("aboutAnim");
    },
  },
  mounted() {
    this.aboutAnim();
  },
};
</script>
<style scoped lang="scss">
.about {
  position: relative;
  padding: 50px 0px;
  overflow: hidden;
  z-index: 500;
  background: var(--bgSectionWhite);

  @media (min-width: 480px) {
    padding: 50px 0 65px;
  }
}

.about-wrap {
  position: relative;
}

.about__title {
  margin-bottom: 20px;
}

.about__img {
  position: relative;
  display: block;
  width: 100px;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 10px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}

.about__text {
  font-size: 14px;
  color: var(--clrAbtTxt);
  line-height: 1.4;
  text-align: left;
  letter-spacing: 1px;
}
</style>
