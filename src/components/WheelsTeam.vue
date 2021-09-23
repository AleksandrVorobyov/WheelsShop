<template lang="pug">
section.team
  .container
    .team-wrap
      .team__title
        section-title(:title="team.title", :subtitle="team.subtitle")
      ul.team__list
        li.team__list-item(v-for="item in team.list", :key="item")
          .team__list-img
            img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
          h4.team__list-name {{ item.name }}
          h6.team__list-meta {{ item.meta }}
</template>
<script>
import { mapGetters } from "vuex";
import sectionTitle from "./parts/section-title.vue";
export default {
  computed: {
    ...mapGetters(["team"]),
  },
  components: {
    sectionTitle,
  },
};
</script>
<style scoped lang="scss">
.team {
  position: relative;
  padding: 50px 0;
  overflow: hidden;
  z-index: 500;
  background: var(--bgSectTeam);
}

.team-wrap {
  position: relative;
}

.team__title {
  margin-bottom: 40px;
}

.team__list {
  display: flex;
  justify-content: space-around;
}

.team__list-item {
  position: relative;
}

.team__list-img {
  position: relative;
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.team__list-name {
  margin-bottom: 10px;
  font-size: 30px;
  font-family: var(--fontBold);
  color: var(--clrTeamTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  letter-spacing: 2px;
}

.team__list-meta {
  font-size: 18px;
  font-family: var(--fontMedium);
  color: var(--clrTeamTtl);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 2px;
}
</style>

