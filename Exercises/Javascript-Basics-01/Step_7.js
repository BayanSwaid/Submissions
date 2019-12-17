shoe_size = prompt("Please enter your shoe size: ");
birth_year = prompt("Please enter your birth year: ");
math();
function math() {
  var result = (shoe_size * 2 + 5) * 50 - birth_year + 1766;
  alert(result);
}
