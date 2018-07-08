<template lang="pug">
  #about
    //button(@click="logout()") Выйти
    h1 Страница "Обо мне"
    .skillsWrap
      skillsRow(
        v-for="type in types"
        :key="type.name"
        :type="type"
        :skills="skills"
      )

</template>

<script>
import skillsRow from "./skillsRow";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    skillsRow
  },
  data() {
    return {
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "Workflow" },
        { id: 3, name: "Blockchain" }
      ]
    };
  },
  computed: {
    ...mapState({
      skills: state => state.skills.data
    }),
    ...mapGetters(["userId"])
  },
  watch: {
    userId() {
      //this.fetchSkills();
    }
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions(["fetchSkills", "getUserInfo", "logout"])
  }
};
</script>
<style lang="scss">
.skillsWrap {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
