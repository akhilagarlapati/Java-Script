'use strict';
let secretNumber=Math.trunc((Math.random()*20)+1)
let score=20;
let highscore=0

let displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
    let guess=Number((document.querySelector('.guess').value))
    console.log(guess)

    if(!guess){
       // document.querySelector('.message').textContent='plz type a number ';
       displayMessage('plz type a number ')
    }
    if(guess===secretNumber){
        //document.querySelector('.message').textContent='Hurrey! you won the game'
        displayMessage('Hurrey! you won the game')
        document.querySelector('body').style.backgroundColor= '#60b347'
        document.querySelector('.number').style.width='30rem'
        document.querySelector('.number').textContent=secretNumber;
        if(score>highscore){
              highscore=score;
              document.querySelector('.highscore').textContent=highscore;
        }
    }else if(guess!==secretNumber){
        if(score>1){
                   displayMessage(guess>secretNumber?'too high!':'too low!')
                    score--
                    document.querySelector('.score').textContent=score
                 }else{
                     document.querySelector('.message').textContent='you lost the game'
                     document.querySelector('.score').textContent=0
                 }
    }

    // }else if(guess>secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent='too high!'
    //         score--
    //         document.querySelector('.score').textContent=score
    //     }else{
    //         document.querySelector('.message').textContent='you lost the game'
    //         document.querySelector('.score').textContent=0
    //     }
        
    // }else if(guess<secretNumber){
    //     if(score>1){
    //     document.querySelector('.message').textContent='too low!'
    //     score--
    //     document.querySelector('.score').textContent=score
    //     }else{
    //         document.querySelector('.message').textContent='you lost the game'
    //         document.querySelector('.score').textContent=0
    //     }
        
    // }
})
document.querySelector('.again').addEventListener('click',function(){
    score=20
    secretNumber=Math.trunc((Math.random()*20)+1)
    
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent=score
   // document.querySelector('.message').textContent='Start guessing...'
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.guess').value=''
    document.querySelector('.number').style.width='15rem'
   document.querySelector('.number').textContent='?';
})

