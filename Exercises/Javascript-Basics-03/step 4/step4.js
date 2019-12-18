var pass = document.getElementById("password");

var con = document.getElementById("confirmation");
function test() {
  if (pass.value != con.value) {
    pass.style.border = "1px red solid";
    con.style.border = "1px red solid";
  }
}
