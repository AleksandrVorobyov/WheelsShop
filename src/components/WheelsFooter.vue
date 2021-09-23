<template lang="pug">
section.footer
  .container
    .footer-wrap
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["footer"]),
  },
};
</script>
<style scoped lang="scss">
.footer {
  position: relative;
  padding: 100px 0;
  overflow: hidden;
  z-index: 500;
  background: white;
}
.footer-wrap {
  position: relative;
}
</style>