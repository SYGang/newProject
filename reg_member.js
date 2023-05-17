var id;
var pw;
var pw_re;
var user_name;
var email;
var birth_d;
var birth_m;
var birth_y;
var tel1;
var tel2;
var tel3;

var sexes;
var sex;

var ipId;
var ipPw;
var ipPw_re;
var ipUser_name;
var ipEmail;
var ipBirth_d;
var ipBirth_m;
var ipBirth_y;
var ipTel_1;
var ipTel_2;
var ipTel_3;
var ipSexes

window.onload = function(){
    ipId=document.getElementById("id");
    ipPw=document.getElementById("pw");
    ipPw_re=document.getElementById("pw_re");
    ipUser_name=document.getElementById("user_name");
    ipEmail=document.getElementById("email");
    ipBirth_y=document.getElementById("birth_y");
    ipBirth_m=document.getElementById("birth_m");
    ipBirth_d=document.getElementById("birth_d");
    ipSex=document.getElementById("sex");
    ipTel_1=document.getElementById("tel1");
    ipTel_2=document.getElementById("tel2");
    ipTel_3=document.getElementById("tel3");

    ipSexes=document.getElementsByName("sex");
}


function check(){
    id=ipId.value;
    pw=ipPw.value;
    pw_re=ipPw_re.value;
    user_name=ipUser_name.value;
    email=ipEmail.value;
    birth_d=ipBirth_d.value;
    birth_m=ipBirth_m.value;
    birth_y=ipBirth_y.value;
    tel1=ipTel_1.value;
    tel2=ipTel_2.value;
    tel3=ipTel_3.value;
   
    for(var i=0; i<ipSexes.length;i++){
        if(ipSexes[i].checked==true){
            sex = ipSexes[i].value;
        }
    }

    var userInfo =
    "id: "+id+"\n"
    +"pw: "+pw+"\n"
    +"pw_re: "+pw_re+"\n"
    +"user_name: "+user_name+"\n"
    +"email: "+email+"\n"
    +"birth_y: "+birth_y+"\n"
    +"birth_m: "+birth_m+"\n"
    +"birth_d: "+birth_d+"\n"
    +"tel_1: "+tel1+"\n"
    +"tel_2: "+tel2+"\n"
    +"tel_3: "+tel3+"\n"
    +"sex: "+sex+"\n"
alert(userInfo);

    if(checkId() && checkPw() && checkPw_re() && checkUserName() && checkEmail() && checkSexes()){
        alert("회원가입 성공");
    }else{
        alert("회원가입 실패");
    }
    
}
function checkId(){
    if(id.length>=4 && id.length<=12){
        console.log("ok id");
        return true;
        }else{
            console.log("no id");
            return false;
        }
}
function checkPw(){
    if(pw.length>=4 && pw.length<=15){
        console.log("ok pw");
        return true;
        }else{
            console.log("no pw");
            return false;
        }
}
function checkPw_re(){
    if(pw_re.length>=4 && pw_re.length<=15&& pw==pw_re){
        console.log("ok Pw_re");
        return true;
        
        }else{
            console.log("no pw_re");
            return false;
        }
}
function checkUserName(){
    if(user_name.length>=2 && user_name.length<=12){
        console.log("ok username");
        return true;
        }else{
            console.log("no username");
            return false;
        }
}
function checkEmail(){
    if(email.length>=4 && email.length<=20){
        console.log("ok email");
        return true;
        }else{
            console.log("no email");
            return false;
        }
}

