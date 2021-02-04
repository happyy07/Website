function validateForm() {
  var x = document.forms["myForm"]["firstname"].value;
  var y = document.forms["myForm"]["password"].value;

  if (x == "admin" && y == "12345.") {
    window.open("./welcome.html");
  //  return true;
  }
  else{
    alert("Username or Password is wrong. Please enter the right one.");
  //  return false;
  }
}
