import Vue from "vue";

const welcome = new Vue({
  el: "#welcome",
  data: {
    isFlip: false,
    errors: 0,
    login: null,
    pass: null,
    checkbox: null,
    loginError: false,
    passError: false,
    captchaError: false,
    loginInput: "",
    passInput: ""
  },
  methods: {
    switchCards() {
      this.isFlip = !this.isFlip;
    },
    checkForm: function(e) {
      this.errors = 0;
      if (!this.login) {
        this.loginError = true;
        this.loginInput = "error";
      } else {
        this.loginError = false;
        this.loginInput = "valid";
      }
      if (!this.pass) {
        this.passError = true;
        this.passInput = "error";
      } else {
        this.passInput = "valid";
        this.passError = false;
      }
      if (!this.checkbox) this.captchaError = true;
      e.preventDefault();
    },
    cleanForm: function(e) {
      this.login = null;
      this.pass = null;
      this.checkbox = null;
      this.loginError = false;
      this.passError = false;
      this.captchaError = false;
      this.loginInput = "";
      this.passInput = "";
      e.preventDefault();
    }
  }
});
