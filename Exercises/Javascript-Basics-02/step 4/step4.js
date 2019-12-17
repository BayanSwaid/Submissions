let name = document.querySelector("#name");
let surname = document.querySelector("#surname");
let city = document.querySelector("#city");
let button = document.querySelector("#button");
button.onclick = function() {
  if (confirm("Clear all fields?")) {
    name.value = "";
    surname.value = "";
    city.value = "";
  } else {
  }
};
