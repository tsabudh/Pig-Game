'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn-hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentScore = 0;
let activeplayer = 0;


//Initial score is 0
score0El.textContent = 0;
score1El.textContent = 0;

//Hide the dice
diceEl.classList.add('hidden');

//Add random dice roll event on "roll dice " button


btnRoll.addEventListener('click', function()
{   
    let dice = Math.trunc(Math.random()*6 + 1);
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    
    
    //If dice is not 1 add the dice to score


    if(dice != 1)
    {
        currentScore += dice;
        document.getElementById(`current--${activeplayer}`).textContent = currentScore;
        
    }else{

        currentScore = 0; 
        document.getElementById(`current--${activeplayer}`).textContent = currentScore;
        activeplayer = activeplayer === 0 ? 1: 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');

    }
   
});


