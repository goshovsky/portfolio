<template lang="pug">
  #root
    .header
      router-view(name="header")
    .tabs
      router-view(name="tabs")
    .content
      router-view
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
import skills from "./components/skills";

const data = [
  { id: 1, title: "Html", percent: 20, category: 0 },
  { id: 2, title: "PHP", percent: 20, category: 1 },
  { id: 3, title: "CSS", percent: 20, category: 0 },
  { id: 4, title: "Node.js", percent: 20, category: 1 },
  { id: 5, title: "Mongo", percent: 20, category: 1 },
  { id: 6, title: "Git", percent: 20, category: 2 },
  { id: 7, title: "Gulp", percent: 20, category: 2 }
];

import { mapActions, mapState, mapGetters } from "vuex";

export default {
  components: {
    appHeader: header,
    tabs,
    skills
  },
  created() {
    // this.getUserInfo();
  },
  methods: {
    ...mapActions(["getUserInfo"])
  }
};
</script>
<style lang="scss">
body,
html {
  margin: 0;
  height: 100%;
}

.wrapper {
  height: 100%;
  background: #cccccc url("https://goshovsky.github.io/assets/images/water.jpg")
    center 0 no-repeat;
  background-size: cover;
  font-family: "Roboto", Helvetica, sans-serif;
}

#root {
  height: 100%;
  display: flex;
  flex-flow: column;
  background-color: rgba(222, 225, 224, 0.8);
}

.header {
  height: 80px;
}

ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}

* {
  box-sizing: border-box;
}

.tabs {
  height: 60px;
}

.content {
  flex: 1;
  padding: 30px;
  color: #566358;
  position: relative;
}
h1 {
  font-size: 21px;
  margin-bottom: 45px;
  margin-top: 15px;
}
.btn {
  padding: 15px 20px;
  color: #fff;
  font-size: 16px;
  background-color: #6da047;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  &:hover {
    background-color: #4e8839;
  }
}
.modal-window {
  visibility: hidden;
  width: 270px;
  height: 120px;
  padding: 15px 20px;
  text-align: center;
  right: auto;
  margin: 0 -50% 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 7px;
  -webkit-box-shadow: 0 0 10px 0 rgb(97, 94, 97, 1);
  -moz-box-shadow: 0 0 10px 0 rgb(97, 94, 97, 1);
  box-shadow: 0 0 10px 0 rgb(97, 94, 97, 1);
  background-color: #fff;
  &__title {
    color: #566358;
    font-size: 16px;
  }
  &__btn {
    position: relative;
    margin: 15px auto 0 auto;
    bottom: 0;
  }
  &.active {
    visibility: visible;
  }
}
</style>
