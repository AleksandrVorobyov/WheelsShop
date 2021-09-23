<template lang="pug">
section.social
  .container
    .social-wrap
      .social__title
        section-title(:title="social.title", :subtitle="social.subtitle")
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
</style>