
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "~`!@#$%^&*()-_+<>?/.:;,|";

var yourPw = document.getElementById("yourPw");

var characters = "";

var atleastone = 4;

//prompt user for #pw characters
alert("Password length must be between 8 and 128 characters");
var charNum = prompt("Select a password length between 8 and 128 characters");
function pwLength() {
    if (charNum < 8 || charNum > 128) {
        charNum = prompt("Select a password length between 8 and 128 characters");
    }
}
pwLength();

// ask user if they want Special characters in their pw
function answerSpecial() {
    var specialYes = confirm("Do you want to use Special characters?");
    if (specialYes == true) {
        characters = characters + special;
    }
    else {
        atleastone = atleastone -1;
    }
}
answerSpecial();

// ask user if they want Lower case letters in their pw
function answerLower() {
    var lowerYes = confirm("Do you want to use Lower case letters?");
    if (lowerYes == true) {
        characters = characters + lower;
    }
    else {
        atleastone = atleastone -1;
    }
}
answerLower();

// ask user if they want Upper case letters in their pw
function answerUpper() {
    var upperYes = confirm("Do you want to use Upper case letters?");
    if (upperYes == true) {
        characters = characters + upper;
    }
    else {
        atleastone = atleastone -1;
    }
}
answerUpper();

// ask user if they want Numbers in their pw
function answerNum() {
    var numYes = confirm("Do you want to use Numbers?");
    if (numYes == true) {
        characters = characters + num;
    }
    else {
        atleastone = atleastone -1;
    }
}
answerNum();

function check() {
    if (atleastone==0) {
        alert("You need to pick at least one character type");
        answerSpecial();
        answerLower();
        answerUpper();
        answerNum();
    }
}
check();

// click Generate Password button will create new pw
function clickSubmit() {
    yourPw.value = password(charNum, characters);

}


// function to randomly generate pw
function password(length, characters) {
    var pwd = "";
    for(var i=0; i<length; i++) {
    pwd = pwd + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

// function to copy pw to clipboard ---> had google and find example
function clickCopy() {
    var copyText = document.getElementById("yourPw");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the Password: " + copyText.value);

}