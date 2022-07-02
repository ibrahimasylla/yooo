'use strict';

//selecting element
const score0=document.getElementById('score--0');
const score1=document.getElementById('score--1');
const curren0=document.getElementById('current--0');
const curren1=document.getElementById('current--1');
const player0=document.getElementById('.player--0');
const player1=document.getElementById('.player--1');
const btnhold=document.getElementById('.btn--hold');


score0.textContent=0;
score1.textContent=0;

const move= ()=>{
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
   activePlayer= activePlayer=== 0 ? 1 : 0;
   player0.classList.toggle('player--active')
   player1.classList.toggle('player--active')
}

const scores=[0,0];
const diceEl=document.querySelector('.dice');
let currentScore=0;
let activePlayer = 0;

diceEl.classList.add('hiden');
const rool=document.querySelector('.btn--roll');


// let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Roll dice 

const Score0=document.getElementById("Score--0")
const Score1=document.getElementById("Score--1")
const yoo=document.getElementById('.btn--new');

yoo.addEventListener('click',function(){

    console.log('yoo')
  

})

rool.addEventListener('click',function(){

    const dice=Math.trunc(Math.random()*6 )+1;


    diceEl.classList.remove('hiden');
    diceEl.src=`dice-${dice}.png`;

    console.log(dice);
 
    if(dice !==1){
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore
     



    }else{
       
        move();
   
    }

})



// btnhold.addEventListener('click',function(){
//     // console.log('hold');

//     // scores[activePlayer] +=currentScore

//     // document.getElementById(`current--${activePlayer}`).textContent=scores[activePlayer];

//     // move();
// })