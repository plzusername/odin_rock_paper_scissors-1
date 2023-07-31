let play_score=document.querySelector('.C-score')
let comp_score=document.querySelector('.P-score')
let winnerText=document.querySelector('.result-text')
let resultText=document.querySelector('.winner-text')
let UserChoice;
let computer_score = 0;
let player_score = 0;
let buttons = document.querySelectorAll('.button');
const reset_c=document.querySelector('.reset-c')
let resetGame;
// Rest of the code remains unchanged...
function getComputerChoice(){
    let random=Math.floor(Math.random()*3)+1;
    let choice;
    if(random==1){
        choice='rock';
    }
    else if(random==2){
        choice='paper';
    }
    else if(random==3){
        choice='scissors';
    }
    else{
        return null
    }
    return choice;
}
function playRound(compChoice){
    let roundResult;
    if(compChoice.toLowerCase()=='rock'&&UserChoice.toLowerCase()=='rock'){
       resultText.textContent ='Rock vs Rock? that is a tie!'
    }
    else if(compChoice.toLowerCase()=='paper'&&UserChoice.toLowerCase()=='paper'){
        resultText.textContent='Paper vs Paper? that is a tie!'
    }
    else if(compChoice.toLowerCase()=='scissors'&&UserChoice.toLowerCase()=='scissors'){
        resultText.textContent='scissors vs scissors? that is a tie!'
    }
    else if(compChoice.toLowerCase()=='rock'&&UserChoice.toLowerCase()=='paper'){
        resultText.textContent='The user wins! paper covers rock!'
        player_score+=1;
    }
    else if(compChoice.toLowerCase()=='rock'&&UserChoice.toLowerCase()=='scissors'){
        resultText.textContent='The computer wins! rock breaks scissors!'
        computer_score+=1;
    }
    else if(compChoice.toLowerCase()=='paper'&&UserChoice.toLowerCase()=='rock'){
        resultText.textContent='The computer wins! paper covers  rock!'
        computer_score+=1;

    }
    else if(compChoice.toLowerCase()=='paper'&&UserChoice.toLowerCase()=='scissors'){
        resultText.textContent='The user wins! scissors cuts paper!'
        player_score+=1;

    }
    else if(compChoice.toLowerCase()=='scissors'&&UserChoice.toLowerCase()=='paper'){
        resultText.textContent='The computer wins! scissors cuts paper!'
        computer_score+=1;

    }
    else if(compChoice.toLowerCase()=='scissors'&&UserChoice.toLowerCase()=='rock'){
        resultText.textContent='The user wins! rock breaks scissors!'
        player_score+=1;

    }
    play_score.textContent=`Player score: ${player_score}`
    comp_score.textContent=`Computer score: ${computer_score}`
    return roundResult
}
function game(){
    if(player_score==5){
        winnerText.textContent='You win!'
    }
    if(computer_score==5){
        winnerText.textContent='You lose!'

    }
}
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent == 'Rock') {
        UserChoice = 'rock';
        playRound(getComputerChoice())
  
      } else if (button.textContent == 'Paper') {
        UserChoice = 'paper';
        playRound(getComputerChoice())
  
  
      } else if (button.textContent == 'Scissors') {
        UserChoice = 'scissors';
        playRound(getComputerChoice())
  
  
      } else {
        UserChoice = 'paper';
      }
      // Start the game after the user makes a choice
      if((player_score==5)||(computer_score==5)){
          console.log(0%5==0)
          buttons.forEach(button =>{
            button.disabled=true
          })
          game()
          if(!document.querySelector('.reset-button')){
          resetGame=document.createElement('button')
          resetGame.classList.add('reset-button')
          reset_c.appendChild(resetGame)
          resetGame.textContent='reset game?'
          
            resetGame.addEventListener('click',()=>{
                winnerText.textContent=''
                resultText.textContent=''
                play_score.textContent=`Player score: `
                comp_score.textContent=`Computer score: `
                player_score=0;
                computer_score=0;
                choices=0
                reset_c.removeChild(resetGame)
                buttons.forEach(button =>{
                    button.disabled=false
                })
            })}
          
      }
  
    });
  });