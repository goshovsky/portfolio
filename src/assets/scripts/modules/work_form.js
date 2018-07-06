import Vue from "vue";

new Vue({
  el: "#works-form",
  data: {
    errors: 0,
    name: null,
    email: null,
    text: null,
    hasErrors: false
  },
  methods: {
    checkForm: function(e) {
      this.errors = 0;
      if (!this.name) {
        this.errors++;
      }
      if (!this.email) {
        this.errors++;
      }
      if (!this.text) {
        this.errors++;
      }
      if (this.errors > 0) {
        this.hasErrors = true;
      }
      e.preventDefault();
    },
    cleanForm: function(e) {
      this.name = null;
      this.email = null;
      this.text = null;
      this.hasErrors = false;
      e.preventDefault();
    }
  },
  template: "#work-form"
});
