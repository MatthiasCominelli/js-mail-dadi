'use strict';


// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


const EmailInserita = document.getElementById("RisultatoEmail");
//iniziamo col chiedere una email all'utente

let EmailUtente = prompt("Inserisci la tua email")
// console.log(emailutente);

//ora bisogna designare una lista di email che hanno la possibilità di accedere al sito attraverso a un array

const ListaEmail = ['matticomi12@gmail.com', 'giacomino02@gmail.com', 'AlbertoAngela@gmail.com', 'ForzaRomasempre@gmail.com'] 
// console.log(ListaEmail);

//ora dobbiamo controllare con un if se l'email dell'utente è all'interno della lista

for (let i = 0; i < ListaEmail.length; i++){

    if (ListaEmail[i] === EmailUtente) {
        EmailInserita.innerHTML = "La tua email può accedere.";
        break;
    }
    else{
        EmailInserita.innerHTML = "La tua email non può accedere";
    }    
    }
