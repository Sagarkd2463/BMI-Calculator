const bmiText = document.getElementById('bmi'),
      descText = document.getElementById('desc'),
      form = document.querySelector('form');


form.addEventListener('submit', onFormSubmit);
form.addEventListener('reset', onFormReset); 


//setting all values to default 
function onFormReset() {
    bmiText.textContent = 0;
    bmiText.className = "";
    descText.textContent = "N/A"; 
}

//getting values height and weight from user to calculate BMI 
function onFormSubmit(e) {
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);


    if(isNaN(weight) || isNaN(height) ||
    weight <= 0 || height <= 0){
        alert("Please enter required details!");
        return; 
    }

    const heightInMeters = height / 100; // cm -> m
    const bmi = weight / Math.pow(heightInMeters, 2);
    const desc = interpretBMI(bmi);

    bmiText.textContent = bmi.toFixed(2);
    bmiText.className = desc; 
    descText.innerHTML = `You are <strong> ${desc} </strong>`; 

}

function interpretBMI(bmi) {  
    if(bmi < 18.5) {
        return "underweight";
    } else if(bmi < 25) {
        return "healthy";
    } else if(bmi < 30) {
        return "overweight";
    } else {
        return "obese"; 
    }
}