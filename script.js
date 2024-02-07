const qrTextInput = document.querySelector(".qr-text-input");
const qrContainer = document.querySelector(".qr-container");
const errorMessage = document.querySelector(".error-message");
const qrGeneratorBtn = document.querySelector(".qr-generator-btn");


qrGeneratorBtn.addEventListener("click",()=>{

validateTextInput();

})

function validateTextInput(){
    const Textvalue = qrTextInput.value.trim().length>0;
    if(Textvalue){
        generateQrCode()
    }else{
        errorMessage.textContent="Please enter text or some URL inside textBox"
    }
  
}

function generateQrCode(){

    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
        text:qrTextInput.value,
        height:350,
        width:350,
        colorLight:"#fff",
        colorDark:'#000'
    })
    qrTextInput.value="";
    errorMessage.textContent="";
}