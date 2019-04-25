// --- classic aproach ---
var classicText = document.getElementById('classic-text');
var classicInput = document.getElementById('classic-input');
classicInput.oninput = function(event){
    classicText.innerText = classicInput.value;
}

// --- vue js aproach ---
var vm = new Vue({
  el: '#app',
  data: {
    message: 'salm',
    HI:''
  },
})
