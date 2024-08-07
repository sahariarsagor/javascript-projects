// finding elements 

const textArea = document.getElementById("textarea");
const counterValue =  document.getElementById("counter");
const remainingValue = document.getElementById("remaining");

textArea.addEventListener("keyup", ()=>{
    updateValue();
})

const updateValue = ()=>{
    counterValue.innerText = textArea.value.length;
    remainingValue.innerText = textArea.getAttribute("maxLength") - textArea.value.length;
}