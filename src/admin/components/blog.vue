<template lang="pug">
  div
    h1 Страница "Блог"
    .works-wrap
      .title Добавить пост
      input(type="text" placeholder="Заголовок" v-model="blog.title")
      br
      input(type="text" placeholder="Дата" v-model="blog.date")
      br
      textarea( placeholder="Контент" v-model="blog.content")
      br
      button(@click="addNewPost").btn Добавить
    div(:class="{'active': isShow, '': !isShow }").modal-window
      .modal-window__title Сообщение отправлено
      button(@click="closeModal").btn.modal-window__btn Закрыть
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isShow: false,
      blog: {
        title: "",
        content: "",
        date: ""
      }
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    async addNewPost() {
      const formData = new FormData();

      Object.keys(this.blog).forEach(prop => {
        formData.append(prop, this.blog[prop]);
      });

      const addedPosts = await this.addPost(formData);
      this.blog.title = "";
      this.blog.content = "";
      this.blog.date = "";
      this.isShow = true;
    },
    closeModal() {
      this.isShow = false;
    }
  }
};
</script>
<style lang="scss">
.works-wrap {
  color: #373e42;
  font-family: "Roboto", Helvetica, sans-serif;
  input {
    height: 46px;
    width: 300px;
    padding: 0 15px;
    border-radius: 7px;
    border: 1px solid transparent;
    margin-bottom: 20px;
    background: #fff;
    font-size: 16px;
  }
  textarea {
    width: 500px;
    height: 200px;
    padding: 15px;
    border-radius: 7px;
    border: 1px solid transparent;
    margin-bottom: 20px;
    background: #fff;
    font-size: 16px;
  }
  .title {
    font-size: 16px;
    margin-bottom: 25px;
    font-weight: bold;
    color: #566358;
  }
}
</style>
