var app = new Vue({
  el: '#app',
  data: {
    text: 'Simple text binding',
    html: '<b>Bolded text</b>',
    dynamicId:'dynamic',
    number:1,
    doesntWork:"{{var a = 10}} , {{if(a){return message}}}"
  },
})