function generateUniquerandomNumber(array_bombs){
    let check_number = false;
    let randomInt;
    
    while(!check_number){
        randomInt = Math.floor(Math.random() * 100 +1);
        
        if(!array_bombs.includes(randomInt)){
            check_number = true;
        }
    }
    
    return randomInt;
}

function generateBombsList(number_of_bombs){
    let bombs = [];
    
    for(let i=0; i<number_of_bombs; i++){
        let bomb_number = generateUniquerandomNumber(bombs);
        bombs.push(bomb_number);
        
    }
    
    return bombs;
}

// FUNZIONE CHE CREA LA SINGOLA CASELLA DELLA GRIGLIA

function createCell(num){
    const square = document.createElement('div');
    square.classList.add('square');

    square.innerText = num;

    return square;
}

function createNewGame(){
    
    const grid = document.getElementById('grid');
    const NUMBER_OF_BOMBS = 16;
    grid.innerHTML = '';
    const bombs = generateBombsList(NUMBER_OF_BOMBS);
    //CREAZIONE CICLO FOR PER PRESENTAZIONE TABELLA 10*10  
    for(let i=1; i<=100; i++){
        let cell = createCell(i);
        
        //IMPLEMENTAZIONE DELL'ELEMENTO BOMB ALL'INTERNO DELLA GRIGLIA 
          cell.addEventListener('click', function(){
            if(!bombs.includes(i)){
                this.classList.add('clicked');
            }
            else{
                this.classList.add('boom');
            }
            
        })
        
        grid.appendChild(cell);
    }
    
    
}

const startButton = document.getElementById('play');
startButton.addEventListener('click', function(){
    createNewGame();  
});




