import Vue from "vue";
import axios from "axios";

const welcome = new Vue({
  el: "#welcome",
  components: {
    auth
  },
  data: {
    isFlip: false
  },
  methods: {
    switchCards() {
      this.isFlip = !this.isFlip;
    }
  }
});

new Vue({
  el: "#auth",
  data: {
    errors: 0,
    login: null,
    pass: null,
    checkbox: null,
    loginError: false,
    passError: false,
    captchaError: false,
    loginInput: "",
    passInput: "",
    user: {}
  },
  methods: {
    loginFunc: function(e) {
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
      if (this.errors === 0) {
        this.user = {
          //name: this.login,
          //password: this.pass
          name: "artem-04062018",
          password: "10293847"
        };
        axios
          .post("http://webdev-api.loftschool.com/login", this.user)
          .then(response => {
            if (response.status === 200) {
              const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("ttl", ttl);
              window.location.href = "/admin";
            }
          });
      }
      e.preventDefault();
    }
  },
  template: "#auth-forms"
});
