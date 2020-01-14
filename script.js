
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "~`!@#$%^&*()-_+<>?/.:;,|";

var yourPw = document.getElementById("yourPw");

var characters = "";

//prompt user for #pw characters
var charNum = prompt("Select a password length between 8 and 128 characters");

//check to see that pw length is between 8 and 128
if (charNum < 8 || charNum > 128) {
        alert("Length must be between 8 and 128 characters");
        var charNum = prompt("Select a password length between 8 and 128 characters");
}

// ask user if they want Special characters in their pw
function answerSpecial() {
    var specialYes = confirm("Do you want to use Special characters?");
    if (specialYes == true) {
        characters = characters + special;
    }
}
answerSpecial();

// ask user if they want Lower case letters in their pw
function answerLower() {
    var lowerYes = confirm("Do you want to use Lower case letters?");
    if (lowerYes == true) {
        characters = characters + lower;
    }
}
answerLower();

// ask user if they want Upper case letters in their pw
function answerUpper() {
    var upperYes = confirm("Do you want to use Upper case letters?");
    if (upperYes == true) {
        characters = characters + upper;
    }
}
answerUpper();

// ask user if they want Numbers in their pw
function answerNum() {
    var numYes = confirm("Do you want to use Numbers?");
    if (numYes == true) {
        characters = characters + num;
    }
}
answerNum();
/*
// function to check that at least one character type is selected
function checkChar() {
    var checked = specialYes || lowerYes || upperYes || numYes
    if (checked == false) {
        alert("Please select at least one character type");
    }
}
answerSpecial();*/

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