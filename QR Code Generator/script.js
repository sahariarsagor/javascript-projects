let qrImage = document.getElementById("qrImg");
let generateButton = document.getElementById("generate");
let qrText = document.getElementById("qrText");

const  generateQr = () =>{
    if(qrText.value.length > 0){
        let inputValue = qrText.value;
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputValue;
        
    } else{
        window.alert("Please Enter Something");
    }
}

generateButton.addEventListener("click", generateQr);