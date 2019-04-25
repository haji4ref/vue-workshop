var app = new Vue({
  el: '#app',
  data: {
    isActive: true,
    hasError: true,
    activeClass: 'active',
    errorClass: 'text-danger'
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.hasError,
        'text-danger': this.hasError && 1 === 1
      }
    }
  }

}, )