import Vue from "vue";

const welcome = new Vue({
    el: '#welcome',
    data: {
        isFlip: false,
    },
    methods:{
        switchCards(){
            this.isFlip = !this.isFlip;
        }
    }
});

const auth = new Vue({
    el:'#auth',
    data:{
        errors:[],
        login:null,
        pass:null,
        checkbox:null
    },
    methods:{
        checkForm:function(e){
            this.errors = [];
            if(!this.login) this.errors.push("Введите логин");
            if(!this.pass) {
                this.errors.push("Введите пароль");
            }
            if(!this.checkbox) this.errors.push("Подтвердите, что вы не робот");
            if(!this.errors.length) return true;
            e.preventDefault();
        },
        activeChange() {
            console.log('dsfsdf');
        }
    }
});

/*const compWelcome = {
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
});*/
