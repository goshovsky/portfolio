<template lang="pug">
  div
    h1 Страница "Мои работы"
    .works-wrap
      .title Добавить работу
      input(type="text" placeholder="Название проекта" v-model="work.title")
      br
      input(type="text" placeholder="Технологии" v-model="work.techs")
      br
      input(type="text" placeholder="Ссылка" v-model="work.link")
      .file-upload
        label
          input(type="file" @change="addPhoto")
          span Выберите картинку
      br
      button(@click="addNewWork").btn Добавить
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
      work: {
        title: "",
        techs: "",
        link: "",
        photo: ""
      }
    };
  },
  methods: {
    ...mapActions(["addWork"]),
    addPhoto(e) {
      const files = e.target.files;
      if (files.length === 0) return;

      this.work.photo = files[0];
    },
    async addNewWork() {
      const formData = new FormData();

      Object.keys(this.work).forEach(prop => {
        formData.append(prop, this.work[prop]);
      });

      const addedWorks = await this.addWork(formData);
      this.work.title = "";
      this.work.techs = "";
      this.work.link = "";
      this.work.photo = "";
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
    width: 270px;
    padding: 0 15px;
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
.file-upload {
  position: relative; /* Даем возможность делать позиционирование, внутри данного элемента */
  overflow: hidden; /* Все что выходит за пределы - скрываем */
  height: 36px; /* Задаем высоту кнопки выбора файла */
  width: 190px;
  border-radius: 3px;
  padding: 8px 4px;
  color: #6da047;
  text-align: center;
}
.file-upload:hover {
  color: #7aad55;
}
.file-upload input[type="file"] {
  display: none; /* Обязательно скрываем настоящий Input File */
}
.file-upload label {
  /* Растягиваем label на всю возможную площадь блока .file-upload */
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.file-upload span {
  line-height: 36px; /* Делаем вертикальное выравнивание текста, который написан на кнопке */
}
</style>
