<template lang="pug">
  #tabs
    ul.tabs
      li.item(v-for="tab in tabs")
        router-link(
          :to="tab.href"
        ).link {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Блог", href: "/blog" }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
#tabs {
  background: #f0efe9;
}

.item {
  border-right: 2px solid #fff;
  &:hover {
    background: #fff;
    & .link {
      color: #6c9c5a;
    }
  }
}
.router-link-exact-active.link {
  background: #fff;
  color: #6c9c5a;
}

.link {
  width: 180px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
  color: #566358;
  text-transform: uppercase;
  font-size: 16px;
}

.tabs {
  display: flex;
  height: 60px;
}
@media (max-width: 768px) {
  .link {
    width: 100%;
    height: 60px;
  }
  .item {
    flex: 1;
    width: 100%;
    border-bottom: 2px solid #fff;
    &:last-child {
      border: none;
    }
  }
  .tabs {
    display: flex;
    flex-direction: column;
    height: auto;
  }
}
</style>
