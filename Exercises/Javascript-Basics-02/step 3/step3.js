let div = document.querySelector("#changeMe");
let input = document.querySelector("#name");
input.onkeydown = function() {
  div.innerHTML = input.value;
};
