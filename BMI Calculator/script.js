// finding element 
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");
const bmiForm = document.querySelector("#bmiForm");

bmiForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const weightValue = weight.value;
    const heightValue = height.value;
    const BMI = weightValue/(heightValue*heightValue);
    result.innerHTML = `Your BMI is ${BMI} Thank You`;
    height.value='';
    weight.value='';
})
