import Vue from "vue";

new Vue({
    el: '#internal',
    data: {
        isLoading: false,
    },
    methods:{
        activeChange(){
            this.isLoading = !this.isLoading;
        }
    }
});