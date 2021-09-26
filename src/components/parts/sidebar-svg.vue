<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 40 40"
    :aria-labelledby="iconName"
    role="presentation"
    class="sidebar-svg"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot/>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "iconBox",
    },
    width: {
      type: [Number, String],
      default: 40,
    },
    height: {
      type: [Number, String],
      default: 40,
    },
    iconColor: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar-svg {
  position: relative;
  margin-right: 10px;
}
</style>