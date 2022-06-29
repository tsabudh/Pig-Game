'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn-hold');



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
});
