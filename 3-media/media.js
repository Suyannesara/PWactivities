
//Listen the event on the button
//document.getElementById('calc-button').addEventListener('click', calcMedia())

function calcMedia(){
    //Input
    let n1 = parseFloat(prompt("Insira a 1º nota: ")) 
    let n2 = parseFloat(prompt("Insira a 2º nota: "))

    //Media calc
    let media = (n1+ n2)/2

    // Show on screen
    document.getElementById('avarage').innerHTML = media

    //State conditions
    if(media >= 6){
        document.getElementById('situation').innerHTML = 'APROVADO'
        document.getElementById('avarage').style.color = 'blue'
        
    }else {
        document.getElementById('situation').innerHTML = 'REPROVADO'
        document.getElementById('avarage').style.color = 'red'
    }


    
}