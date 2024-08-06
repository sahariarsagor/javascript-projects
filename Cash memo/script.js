// finding element 
const cashForm = document.getElementById("cashForm");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const totalPrice = document.getElementById("totalPrice");
const result = document.getElementById("result");

//create operator function

const createList = (x, y) =>{
    const paragraph = document.createElement("p");
    result.appendChild(paragraph);
    paragraph.innerHTML = `Product Name: <b>${x}</b> the price is: <b>${y}</b>`;
}

//add event listener 
let total = 0;
cashForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputPrice = parseFloat(productPrice.value);
    total += inputPrice;
    totalPrice.textContent = total;

    createList(productName.value, productPrice.value);
    
    productPrice.value = "";
    productName.value = "";
})
