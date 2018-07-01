import Vue from "vue";

const compWelcome = {
 template: "#compWelcome"
};

const compAuth = {
 template: "#compAuth"
};

new Vue({
 el: "#animation-root",
 components: {
  compWelcome,
  compAuth
 },
 data: {
  compToShow: "compWelcome"
 },
 methods: {
  switchComponents() {
   this.compToShow = this.compToShow === "compWelcome" ? "compAuth" : "compWelcome";
  }
 },
 template: "#animation"
});
