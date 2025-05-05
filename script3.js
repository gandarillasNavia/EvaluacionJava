const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.querySelector('.calculate-button'); 
const bmiValueSpan = document.getElementById('bmi-value');
const bmiCategorySpan = document.getElementById('bmi-category');


calculateButton.addEventListener('click', () => {
 
    const weight = parseFloat(weightInput.value); 
    const heightCm = parseFloat(heightInput.value); 

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {

        bmiValueSpan.textContent = '--';
        bmiCategorySpan.textContent = 'Por favor, introduce valores válidos.'; 
        return; 
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const bmiRounded = bmi.toFixed(1);

   
    let category = '';
    

    if (bmi < 18.5) {
        category = 'Bajo peso';
         
    } else if (bmi < 25) {
        category = 'Peso normal';
        
    } else if (bmi < 30) {
        category = 'Sobrepeso';
        
    } else if (bmi < 35) {
        category = 'Obesidad Clase I';
        
    } else if (bmi < 40) {
        category = 'Obesidad Clase II';
        
    } else {
        category = 'Obesidad Clase III (Mórbida)';
        
    }

    bmiValueSpan.textContent = bmiRounded;

    bmiCategorySpan.textContent = category;

}); 