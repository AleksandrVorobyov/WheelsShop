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
  padding: 50px 0;
  overflow: hidden;
  z-index: 500;
  background: url("~@/assets/img/statistics/statistics-bg.jpg") center center /
      cover no-repeat,
    linear-gradient(var(--bgSectionBlack), var(--bgSectionBlack));

  @media (min-width: 480px) {
    padding: 100px 0;
  }
}

.statistics-wrap {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.statistics__title {
  margin-bottom: 10px;
  font-size: 24px;
  font-family: var(--fontBold);
  color: var(--clrStatTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  letter-spacing: 2px;

  @media (min-width: 480px) {
    font-size: 30px;
  }
}

.statistics__subtitle {
  margin-bottom: 30px;
  font-size: 16px;
  font-family: var(--fontMedium);
  color: var(--clrStatTtl);
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 2px;

  @media (min-width: 480px) {
    font-size: 18px;
  }

  @media (min-width: 720px) {
    margin-bottom: 65px;
  }
}

.statistics__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (min-width: 720px) {
    justify-content: space-between;
    gap: 0;
    flex-direction: row;
  }
}

.statistics__info-item {
  width: 280px;
  text-align: center;

  span {
    display: block;
    margin-bottom: 20px;
    font-size: 44px;
    font-family: var(--fontBold);
    color: var(--clrStatTtl);
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 2px;

    @media (min-width: 480px) {
      font-size: 56px;
    }

    @media (min-width: 720px) {
      font-size: 72px;
      margin-bottom: 0;
    }
  }

  p {
    font-size: 20px;
    font-family: var(--fontMedium);
    color: var(--clrStatTtl);
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1;
    text-align: center;
    letter-spacing: 2px;
    margin: 0;

    @media (min-width: 480px) {
      font-size: 24px;
    }
  }
}
</style>
