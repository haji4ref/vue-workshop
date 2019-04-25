var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
  methods: {
    sayHello() {
      alert("Hello to my little friend!");
    },
    sayHi(msg){
      alert("Hi "+ msg);
    }
  }
}, )