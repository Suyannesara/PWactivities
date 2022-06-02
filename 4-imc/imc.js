//Listening the event on the button
document.getElementById('calc-imc').addEventListener('click', calcImc)

function calcImc(){

    //Taking values from inputs
    let w = Number(document.getElementById('weight').value);
    let h = Number(document.getElementById('height').value);

    //Calc imc
    let imc = w/(Math.pow(h, 2))
    alert(`SEU IMC É DE: ${imc}`)
    
    //Conditions
    if(imc < 20){
        alert('ABAIXO DO PESO')
        
    }else if (imc >= 20 && imc <= 25){
        alert('NORMAL')
        
    }else if(imc > 25 && imc < 30){
        alert('SOBREPESO')
        
    }else if(imc >= 30 && imc <= 35){
        alert('OBESIDADE 1')
        
    }else if (imc > 35 && imc < 40){
        alert('OBESIDADE 2')
        
    }else if( imc > 40){
        alert('OBESIDADE 3')

    }

}