<template lang="pug">
#home.home
  header
    wheels-header
  main
    wheels-navigation
    wheels-about
    wheels-statistics
    wheels-featured
    wheels-team
    wheels-social
  footer
    wheels-footer
</template>

<script>
import WheelsHeader from "../components/WheelsHeader.vue";
import WheelsNavigation from "../components/WheelsNavigation.vue";
import WheelsAbout from "../components/WheelsAbout.vue";
import WheelsStatistics from "../components/WheelsStatistics.vue";
import WheelsFeatured from "../components/WheelsFeatured.vue";
import WheelsTeam from "../components/WheelsTeam.vue";
import WheelsSocial from "../components/WheelsSocial.vue";
import WheelsFooter from "../components/WheelsFooter.vue";

export default {
  name: "Home",
  components: {
    WheelsHeader,
    WheelsNavigation,
    WheelsAbout,
    WheelsStatistics,
    WheelsFeatured,
    WheelsTeam,
    WheelsSocial,
    WheelsFooter,
  },
};
</script>
