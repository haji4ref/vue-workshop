var app = new Vue({
  el: '#app',
  data: {
    message: 'Salam donya',
    msg: 'Hello',
  },
  computed: {
    // note : every computed property should return a value
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    makeItReverse(message) {
      return message.split('').reverse().join('');
    }
  },
  created() {
    // Challenge : what is async? how it works? what is setTimeout ?

    // change msg value by doing an async work
    setTimeout(() => {
      this.msg = 'Bye;'
    }, 2000);
  },
  watch: {
    // note : there is no need that every watch property return a value
    msg: function () {
      console.log("Changed : some logical things!");
    }
  }

}, )