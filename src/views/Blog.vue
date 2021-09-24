<template lang="pug">
#blog-page
  header
    wheels-navigation
  main
    wheels-statistics
    wheels-social
    wheels-team
    wheels-featured
  footer
    wheels-footer
</template>

<script>
import WheelsNavigation from "../components/WheelsNavigation.vue";
import WheelsAbout from "../components/WheelsAbout.vue";
import WheelsStatistics from "../components/WheelsStatistics.vue";
import WheelsTeam from "../components/WheelsTeam.vue";
import WheelsSocial from "../components/WheelsSocial.vue";
import WheelsFooter from "../components/WheelsFooter.vue";
import WheelsFeatured from "../components/WheelsFeatured.vue";

export default {
  name: "Home",
  components: {
    WheelsNavigation,
    WheelsStatistics,
    WheelsTeam,
    WheelsSocial,
    WheelsFooter,
    WheelsFeatured,
  },
};
</script>