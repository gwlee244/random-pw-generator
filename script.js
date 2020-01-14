
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "~`!@#$%^&*()-_+";

var charNum = document.getElementById("charNum");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

var characters = "";

function answerSpecial() {
    var specialYes = confirm("Do you want to use Special characters?");
    if (specialYes == true) {
        characters = characters + special;
    }
}
answerSpecial();

function answerLower() {
    var lowerYes = confirm("Do you want to use Lower case letters?");
    if (lowerYes == true) {
        characters = characters + lower;
    }
}
answerLower();

function answerUpper() {
    var upperYes = confirm("Do you want to use Upper case letters?");
    if (upperYes == true) {
        characters = characters + upper;
    }
}
answerUpper();

function answerNum() {
    var numYes = confirm("Do you want to use Numbers?");
    if (numYes == true) {
        characters = characters + num;
    }
}
answerNum();


function clickSubmit() {
    yourPw.value = password(charNum.value, characters);
}

function password(length, characters) {
    var pwd = "";
    for(var i=0; i<length; i++) {
    pwd = pwd + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

function clickCopy() {
    var copyText = document.getElementById("yourPw");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the Password: " + copyText.value);

}