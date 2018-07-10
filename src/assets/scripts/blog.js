import "./modules/mobile_menu";
import { preLoader } from "./modules/preloader";
import Vue from "vue";
import axios from "axios";
axios.defaults.baseURL = "http://webdev-api.loftschool.com/";

preLoader();
new Vue({
  el: "#postsList",
  data: {
    posts: Array,
    isShowMenu: false,
    isFixed: false,
    scrollPosition: 0
  },
  created() {
    axios.get("/posts/11").then(response => {
      const respData = response.data;
      respData.forEach(function(item) {
        item.date = new Date(item.date * 1000).toLocaleDateString("ru", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        });
      });
      this.posts = respData;
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    showMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
    handleScroll: function(e) {
      let scroll = window.pageYOffset;
      if (scroll < 380) {
        this.isFixed = false;
      } else {
        this.isFixed = true;
      }
    }
  }
});
