
//Listen the event on the button
//document.getElementById('calc-button').addEventListener('click', calcMedia())

function calcMedia(){
    //Input
    let n1 = parseFloat(prompt("Insira a 1º nota: ")) 
    let n2 = parseFloat(prompt("Insira a 2º nota: "))

    //Values
    let avarage = document.getElementById('avarage')
    let situation = document.getElementById('situation')

    //Media calc
    let media = (n1+ n2)/2

    // Show on screen
    avarage.innerHTML = media

    //State conditions
    if(media >= 6){
       situation.innerHTML = 'APROVADO'
       avarage.style.color = 'blue'
        
    }else {
        situation.innerHTML = 'REPROVADO'
        avarage.style.color = 'red'
    }


    
}