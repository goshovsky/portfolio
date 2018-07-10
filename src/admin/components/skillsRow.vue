<template lang="pug">
  .skills
    .skills-title {{type.name}}
    table.skills-list
      skill-item(
        v-for="skill in skills"
        v-if="skill.category === type.id"
        :key="skill.id"
        :skill="skill"
      )
      skill-item(
        :editmode="true"
        :typeId="type.id"
      )

</template>

<script>
import skillItem from "./skillItem";

export default {
  components: {
    skillItem
  },
  props: {
    type: {
      type: Object,
      default: () => {}
    },
    skills: {
      type: Array,
      default: () => []
    }
  },
  mehtods: {
    fromNameToNum(name) {
      switch (name) {
        case "frontend":
          return 0;
        case "backend":
          return 1;
        case "workflow":
          return 2;
      }
    }
  }
};
</script>
<style lang="scss">
.skills {
  width: 40%;
}
.btn-skills {
  padding: 5px 7px;
  color: #fff;
  font-size: 14px;
  background-color: #6da047;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #4e8839;
  }
  &.delete-btn {
    background-color: #8d8d8d;
  }
}
.skills-title {
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
}
.skills-list {
  padding-left: 20px;
  margin-bottom: 20px;
}
.skills-item td {
  padding-bottom: 8px;
  input {
    border-radius: 5px;
    padding: 5px 10px;
    width: 80%;
    border: none;
  }
}
@media (max-width: 1250px) {
  .skills {
    width: 50%;
  }
}
@media (max-width: 1250px) {
  .skills {
    width: 100%;
  }
}
</style>
