const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*";
const allChar = upperCase+lowerCase+number+symbol;
const displayPassword = document.getElementById("password");

const length = 12;
const generatePassword =()=>{
    let password = '';
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }
    displayPassword.value = password;
}

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", generatePassword);

const copyPassword = () =>{
    displayPassword.select();
    document.execCommand("copy");
    window.alert("Password Successfully Copied, Thank  You");
}

