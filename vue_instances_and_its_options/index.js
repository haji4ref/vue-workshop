var app = new Vue({
  el: '#app',
  data: {
    message: 'Helllo vue js!'
  },
  methods: {
    sayHello() {
      alert("hello")
    }
  },
  mounted() {

  },
  created() {
    console.log(this.message);

    this.sayHello();

    // Challenge : what 'this' keyword is pointing to?
    // console.log(this)
  },
})