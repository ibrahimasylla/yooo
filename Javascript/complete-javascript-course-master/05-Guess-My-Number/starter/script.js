'use strict';


// document.querySelector('.message')

// console.log(document.querySelector('.message').textContent
// );

// document.querySelector('.message').textContent = 'Salut'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 23;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value)

// console.log(document.querySelector('.message').textContent);

let  secretnumber =  Math.trunc(Math.random()*20)+1 
let score = 20;
document.querySelector('.number').textContent=secretnumber
console.log(secretnumber);
document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log (typeof guess );

  if(!guess){
    document.querySelector('.message').textContent = 'No number';

  }else if (guess===secretnumber){
    document.querySelector('.message').textContent = 'Bravoo';
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    



  }else if( guess >secretnumber){
      if(score>0){
        document.querySelector('.message').textContent = 'Trop haut';
        score--;
        document.querySelector('.score').textContent=score;
    
      } 
      }else if( guess < secretnumber){

        if(score>0){
          document.querySelector('.message').textContent = 'Trop bas';
          score--;
          document.querySelector('.score').textContent=score;
      
        }
     
      }
      else{
        document.querySelector('.message').textContent='you lost';

      }

    


})



document.querySelector('.again').addEventListener('click',function(){
    score = 20;

secretnumber =  Math.trunc(Math.random()*20)+1 

    // document.querySelector('.message').textContent=secretnumber
    document.querySelector('.message').textContent = 'start';

    document.querySelector('.guess').textContent=' ';
    document.querySelector('.guess').value='';

     


})