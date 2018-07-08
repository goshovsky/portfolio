import Vue from "vue";

new Vue({
  el: "#mob-menu",
  data: {
    isActive: false
  },
  methods: {
    activeChange() {
      this.isActive = !this.isActive;
    }
  },
  template: "#mobile-menu"
});
