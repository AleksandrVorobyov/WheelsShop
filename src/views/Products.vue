<template lang="pug">
#products-page
  header
    wheels-navigation
  main
    wheels-featured
    wheels-team
    wheels-social
  footer
    wheels-footer
</template>

<script>
import WheelsNavigation from "../components/WheelsNavigation.vue";
import WheelsFeatured from "../components/WheelsFeatured.vue";
import WheelsTeam from "../components/WheelsTeam.vue";
import WheelsSocial from "../components/WheelsSocial.vue";
import WheelsFooter from "../components/WheelsFooter.vue";

export default {
  name: "Home",
  components: {
    WheelsNavigation,
    WheelsFeatured,
    WheelsTeam,
    WheelsSocial,
    WheelsFooter,
  },
};
</script>