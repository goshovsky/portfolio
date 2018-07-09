import Vue from "vue";
import axios from "axios";
axios.defaults.baseURL = "http://webdev-api.loftschool.com/";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const persents = (dashOffset / 100) * (100 - this.skillPercents);

      circle.style.strokeDashoffset = persents;
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  mutations: {
    addSkill(state, skill) {
      state.data.push(skill);
    }
  },
  created() {
    axios.get("/skills/11").then(response => {
      const respData = response.data;
      let frontendSkills = [];
      let backendSkills = [];
      let workflowSkills = [];
      let blockchainSkills = [];
      respData.forEach(function(item, i) {
        switch (item.category) {
          case 0:
            frontendSkills[frontendSkills.length] = item;
            break;
          case 1:
            backendSkills[backendSkills.length] = item;
            break;
          case 2:
            workflowSkills[workflowSkills.length] = item;
            break;
          case 3:
            blockchainSkills[blockchainSkills.length] = item;
            break;
        }
      });

      const newData = [
        {
          skillsGroup: "Frontend",
          skills: frontendSkills
        },
        {
          skillsGroup: "Backend",
          skills: backendSkills
        },
        {
          skillsGroup: "WorkFlow",
          skills: workflowSkills
        },
        {
          skillsGroup: "Blockchain",
          skills: blockchainSkills
        }
      ];
      this.skills = newData;
    });
  },
  template: "#skills-list"
});
