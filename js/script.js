// FUNZIONE CHE CREA LA SINGOLA CASELLA DELLA GRIGLIA

function createCell(num){
    const element = document.createElement('div');
    element.classList.add('square');

    element.innerText = num;

    return element;
}
//CREAZIONE BOTTONE INIZIO GIOCO

const startButton = document.getElementById("play");

startButton.addEventListener("click", function(){
    
    const grid = document.getElementById('grid');
   //CREAZIONE CICLO FOR PER PRESENTAZIONE TABELLA 10*10  
    for(let i=0; i<100; i++){
        let square = createCell(i+1);
 
       //IMPLEMENTAZIONE DELL'ELEMENTO SQAURE ALL'INTERNO DELLA GRIGLIA 
        square.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log(i+1);
        })
    
        grid.appendChild(square);
    }

})
