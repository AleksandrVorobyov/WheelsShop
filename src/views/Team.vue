<template lang="pug">
#team-page
  header
    wheels-navigation
  main
    wheels-team
    wheels-social
    wheels-statistics
    wheels-about
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

export default {
  name: "Home",
  components: {
    WheelsNavigation,
    WheelsAbout,
    WheelsStatistics,
    WheelsTeam,
    WheelsSocial,
    WheelsFooter,
  },
};
</script>