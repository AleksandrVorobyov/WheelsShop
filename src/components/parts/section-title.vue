<template lang="pug">
h3.section-title__title {{ title }}
h5.section-title__subtitle {{ subtitle }}
</template>
<script>
export default {
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
<style scoped lang="scss">
.section-title__title {
  margin-bottom: 10px;
  font-size: 30px;
  font-family: var(--fontBold);
  color: var(--clrSectTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 2px;
  text-align: center;
}

.section-title__subtitle {
  font-size: 18px;
  font-family: var(--fontMedium);
  color: var(--clrSectTxt);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 2px;
  text-align: center;
}
</style>