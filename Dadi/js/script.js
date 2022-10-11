'use strict'; 


const risultato = document.getElementById("VincitoreDadi");
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//iniziamo con il far lanciare un dado al nostro computer

 let DadoComputer = Math.floor((Math.random()* 6 + 1)); //ho aggiunto il +1 per non far uscire lo 0
// console.log(DadoComputer);

//ora facciamo tirare il dado al giocatore
let DadoGiocatore = Math.floor((Math.random()* 6 + 1));

//ora confrontiamo i due risultati e decidiamo un vincitore

if (DadoComputer == DadoGiocatore){
    risultato.innerHTML = "Pareggio";

} else if (DadoComputer > DadoGiocatore){
    risultato.innerHTML = "Vince il Computer";
} else {
    risultato.innerHTML = "Il giocatore ha vinto";
}

