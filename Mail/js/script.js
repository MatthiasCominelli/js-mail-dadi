'use strict';


// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

//creo la lista delle email che possono fare il login
const ListaEmail = ['matticomi12@gmail.com', 'giacomino02@gmail.com', 'AlbertoAngela@gmail.com', 'ForzaRomasempre@gmail.com'];

//prendo gli elementi dall'HTML

let btn = document.querySelector('button');
let risp = document.getElementById('risposta');

//creo il loop che scannerizzi l'array

let mailRegistered;

const check = function(){
    let emailUtente = document.getElementById('usermail');
    let mailRegistered;

    for (let i = 0; i < ListaEmail.length; i++) {

        if (emailUtente.value === ListaEmail[i]) {

            mailRegistered = true;

        }
    }
    // creo una risposta 
    risp.innerHTML = '';
    let answer = document.createElement('div');

    if(mailRegistered){
        answer.textContent = "Bentornato"
    }else{
        answer.textContent = "Non hai ancora creato un account?"
    };

    risp.append(answer)
};

// creo un evento che mi faccia funzionare il click sul bottone

btn.addEventListener('click', check);
