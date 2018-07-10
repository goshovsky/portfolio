<template lang="pug">
  tr.skills-item(v-if="!editmode")
    td {{skill.title}}
    td
      span {{skill.percents}} %
    td
      button(type="button" @click="removeItem").btn-skills.delete-btn Удалить

  tr.skills-item(v-else)
    td
      input(
        type="text"
        placeholder="Новый скилл"
        v-model="newSkill.title"
      )
    td
      input(
        type="text"
        placeholder="Проценты"
        v-model="newSkill.percents"
      )

    td
      button(type="button" @click="addSkill").btn-skills Добавить
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    skill: {
      type: Object,
      default: () => {}
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  computed: {
    ...mapGetters(["userId"])
  },
  methods: {
    ...mapActions(["addNewSkill", "removeExistedSkill"]),
    async addSkill() {
      const addedSkill = await this.addNewSkill(this.newSkill);
      this.newSkill.title = "";
      this.newSkill.percents = "";
    },
    removeItem() {
      this.removeExistedSkill(this.skill.id);
    }
  }
};
</script>
