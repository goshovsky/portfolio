<template lang="pug">
  #header
    .title Панель администрирования
    a(href="/").exit Вернуться на сайт
</template>

<style lang="scss" scoped>
#header {
  background: #6c9c5a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: #fff;
  height: 100%;
  font-family: "Roboto", Helvetica, sans-serif;
}
.title {
  font-size: 28px;
}
.exit {
  color: inherit;
  font-size: 16px;
}
</style>
