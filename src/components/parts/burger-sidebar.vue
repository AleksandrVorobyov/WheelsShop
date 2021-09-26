<template lang="pug">
button.burger(@click="$emit('action')")
  span {{ text }}
</template>
<script>
export default {
  props: {
    text: String,
  },
  emits: ["action"],
};
</script>
<style scoped lang="scss">
.navigation__burger .burger {
  color: var(--clrSidebarTtl);

  &::before {
    background: var(--clrSidebarTtl);
  }

  &::after {
    background: var(--clrSidebarTtl);
  }

  span::before {
    background: var(--clrSidebarTtl);
  }
}

.burger {
  position: relative;
  padding: 0;
  padding-right: 25px;
  font-size: 22px;
  font-family: var(--fontBold);
  color: var(--clrHeadTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  letter-spacing: 2px;

  @media (min-width: 480px) {
    font-size: 28px;
    line-height: 0.6;
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    height: 4px;
    width: 20px;
    content: "";
    background: var(--clrHeadTtl);
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 4px;
    width: 20px;
    content: "";
    background: var(--clrHeadTtl);
  }

  span::before {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 20px;
    content: "";
    background: var(--clrHeadTtl);
  }
}
</style>