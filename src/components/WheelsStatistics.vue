<template lang="pug">
section.statistics
  .container
    .statistics-wrap
      h3.statistics__title {{ statistics.title }}
      h5.statistics__subtitle {{ statistics.subtitle }}
      ul.statistics__info
        li.statistics__info-item(v-for="item in statistics.info", :key="item")
          span {{ item.number }}
          p {{ item.text }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["statistics"]),
  },
};
</script>
<style scoped lang="scss">
.statistics {
  position: relative;
  padding: 100px 0;
  overflow: hidden;
  z-index: 500;
  background: url("~@/assets/img/statistics/statistics-bg.jpg") center center /
      cover no-repeat,
    linear-gradient(var(--bgSectionBlack), var(--bgSectionBlack));
}

.statistics-wrap {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.statistics__title {
  margin-bottom: 10px;
  font-size: 30px;
  font-family: var(--fontBold);
  color: var(--clrStatTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  letter-spacing: 2px;
}

.statistics__subtitle {
  margin-bottom: 65px;
  font-size: 18px;
  font-family: var(--fontMedium);
  color: var(--clrStatTtl);
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 2px;
}

.statistics__info {
  display: flex;
  justify-content: space-between;
}

.statistics__info-item {
  max-width: 280px;
  text-align: center;

  span {
    font-size: 72px;
    font-family: var(--fontBold);
    color: var(--clrStatTtl);
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 2px;
  }

  p {
    font-size: 24px;
    font-family: var(--fontMedium);
    color: var(--clrStatTtl);
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 2px;
  }
}
</style>
