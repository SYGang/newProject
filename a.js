var str_id = "";
var str_pw = "";
var loginBox
var input_id;
var input_pw;




function login() {
  //  alert("id"+input_id.value+"pw"+input_pw.value);
  var local_id = input_id.value;
  var local_pw = input_pw.value;
  if (local_id == "cat" && local_pw == "1234") {
    loginCuccess();
  } else {
    alert("로그인실패");
  }
}

function loginCuccess() {
  loginBox.innerHTML = "<p>" + input_id + "회원님 반갑습니다.</p>";
}

window.onload = function () {
  input_id = document.getElementById("id");
  input_pw = document.getElementById("pw");
  loginBox = document.getElementById("loginBox");
}