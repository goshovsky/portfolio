import "./modules/mobile_menu";
import Vue from "vue";
import axios from "axios";
axios.defaults.baseURL = "http://webdev-api.loftschool.com/";
new Vue({
  el: "#postsList",
  data: {
    posts: Array
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
  }
});
