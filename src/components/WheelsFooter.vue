<template lang="pug">
section.footer
  .container
    .footer-wrap
      .footer__head
        h2.footer__head-logo {{ footer.logo }}
        h4.footer__head-subtitle(v-for="item in footer.subtitle", :key="item") {{ item }}
      .footer__list
        .footer__list-col(
          v-for="(list, idx) in footer.list",
          :key="'footer-list-0' + idx"
        )
          h5.footer__list-title(v-if="list.title") {{ list.title }}
          ul.footer__list-links(v-if="list.links")
            li.footer__list-links-item(v-for="item in list.links", :key="item")
              a(:href="item.link") {{ item.text }}
          ul.footer__list-social(v-if="list.social")
            li.footer__list-social-item(
              v-for="item in list.social",
              :key="item"
            )
              a(:href="item.link")
                img(:src="require('@/assets/img/' + item.src)")
          .footer__list-map(v-if="list.map")
            img(:src="require('@/assets/img/' + list.map)")
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
  background: #1e1e1e;
}

.footer-wrap {
  position: relative;
}

.footer__head {
  margin-bottom: 50px;
}

.footer__head-logo {
  margin-bottom: 20px;
  font-size: 30px;
  font-family: var(--fontBold);
  color: var(--clrFtrLogo);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  letter-spacing: 2px;
}

.footer__head-subtitle {
  font-size: 18px;
  font-family: var(--fontBold);
  color: var(--clrFtrSub);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.4;
  text-align: center;
  letter-spacing: 2px;
}

.footer__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.footer__list-title {
  margin-bottom: 20px;
  font-size: 18px;
  font-family: var(--fontBold);
  color: var(--clrFtrLogo);
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  text-align: left;
  letter-spacing: 2px;
}

.footer__list-links-item a {
  position: relative;
  display: block;
  font-size: 18px;
  color: var(--clrFtrLogo);
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 2px;
  text-align: left;
  transition: transform 0.3s linear 0.3s;

  &::before {
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--clrFtrLogo);
    content: "";
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s linear 0s;
  }

  &:hover {
    transform: translateX(10px);
    transition: transform 0.3s linear 0s;

    &::before {
      opacity: 1;
      transition: opacity 0.3s linear 0.3s;
    }
  }
}

.footer__list-links-item + .footer__list-links-item {
  margin-top: 10px;
}

.footer__list-social {
  display: flex;
}

.footer__list-social-item + .footer__list-social-item {
  margin-left: 10px;
}

.footer__list-social-item {
  transition: opacity 0.3s linear 0s;

  &:hover {
    opacity: 0.7;
  }
}
</style>