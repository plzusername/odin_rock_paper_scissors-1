let play_score=document.querySelector('.P-score')
let comp_score=document.querySelector('.C-score')
let winnerText=document.querySelector('.result-text')
let gameResult=document.querySelector('.game-result')
let resultText=document.querySelector('.winner-text')
let playerChoiceDisplay=document.querySelector('.play-choice');
let computerChoiceDisplay=document.querySelector('.comp-choice');
let UserChoice;
let computer_score = 0;
let player_score = 0;
let main=document.querySelector('.main')
let buttons = document.querySelectorAll('.button');
const reset_c=document.querySelector('.reset-c')
let roundResult=document.querySelector('h2')
let roundExp=document.querySelector('h3')
let modalC=document.querySelector('.modal-c')
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
    if(compChoice.toLowerCase()=='rock'&&UserChoice.toLowerCase()=='rock'){
       roundResult.textContent ='Its a tie!'
       roundExp.textContent ='Rock ties with Rock'
       computerChoiceDisplay.textContent='✊';
       playerChoiceDisplay.textContent='✊';
    }
    else if(compChoice.toLowerCase()=='paper'&&UserChoice.toLowerCase()=='paper'){
        roundResult.textContent ='Its a tie!'
        roundExp.textContent ='Paper ties with paper!'
        computerChoiceDisplay.textContent='✋';
        playerChoiceDisplay.textContent='✋';
    }
    else if(compChoice.toLowerCase()=='scissors'&&UserChoice.toLowerCase()=='scissors'){
        roundResult.textContent ='Its a tie!'
        roundExp.textContent ='Scissors ties with Scissors'
        computerChoiceDisplay.textContent='✌';
        playerChoiceDisplay.textContent='✌';
    }
    else if(compChoice.toLowerCase()=='rock'&&UserChoice.toLowerCase()=='paper'){
        roundResult.textContent ='You win!'
        roundExp.textContent ='Paper wraps rock!'
        player_score+=1;
        computerChoiceDisplay.textContent='✊';
        playerChoiceDisplay.textContent='✋';
    }
    else if(compChoice.toLowerCase()=='rock'&&UserChoice.toLowerCase()=='scissors'){
        roundResult.textContent ='You lose!'
        roundExp.textContent ='Rock crushes scissors!'
        computer_score+=1;
        computerChoiceDisplay.textContent='✊';
        playerChoiceDisplay.textContent='✌';
    }
    else if(compChoice.toLowerCase()=='paper'&&UserChoice.toLowerCase()=='rock'){
        roundResult.textContent ='You lose'
        roundExp.textContent ='Paper covers rock!'
        computer_score+=1;
        computerChoiceDisplay.textContent='✋';
        playerChoiceDisplay.textContent='✊';
    }
    else if(compChoice.toLowerCase()=='paper'&&UserChoice.toLowerCase()=='scissors'){
        roundResult.textContent ='You win!'
        roundExp.textContent ='Scissors cuts paper!'
        player_score+=1;
        computerChoiceDisplay.textContent='✋';
        playerChoiceDisplay.textContent='✌';
    }
    else if(compChoice.toLowerCase()=='scissors'&&UserChoice.toLowerCase()=='paper'){
        roundResult.textContent ='You lose'
        roundExp.textContent ='Scissors cuts paper!'
        computer_score+=1;
        computerChoiceDisplay.textContent='✌';
        playerChoiceDisplay.textContent='✋';
    }
    else if(compChoice.toLowerCase()=='scissors'&&UserChoice.toLowerCase()=='rock'){
        roundResult.textContent ='You win!'
        roundExp.textContent ='Rock crushes scissors!'
        player_score+=1;
        computerChoiceDisplay.textContent='✌';
        playerChoiceDisplay.textContent='✊';
    }
    play_score.textContent=`Player: ${player_score}`
    comp_score.textContent=`Computer: ${computer_score}`
    return roundResult
}
 function modal(){
     if(player_score==5){
         gameResult.textContent='You win!'
     }
     if(computer_score==5){
         gameResult.textContent='You lose!'

     }
 }
 // The rest of your JavaScript code remains unchanged...

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent === '✊') {
        UserChoice = 'rock';
        playRound(getComputerChoice());
      } else if (button.textContent === '✋') {
        UserChoice = 'paper';
        playRound(getComputerChoice());
      } else if (button.textContent === '✌') {
        UserChoice = 'scissors';
        playRound(getComputerChoice());
      } else {
        UserChoice = 'paper';
      }
      
      if (player_score === 5 || computer_score === 5) {
        main.style.opacity='0.8'
        main.style.backgroundColor='black'
        modalC.style.display = 'block'; // Show the modal
        buttons.forEach(button => {
          button.disabled = true;
        });
        modal(); // Call the modal function to update the modal content
  
        // Reset game logic when the modal button is clicked
        const modalButton = document.querySelector('.modal-button');
        modalButton.addEventListener('click', () => {
          modalC.style.display = 'none'; // Hide the modal
          main.style.opacity = '1'; // Hide the modal
          main.style.backgroundColor='#222831'
          roundResult.textContent = 'Choose your weapon';
          roundExp.textContent = 'First to score 5 points wins';
          playerChoiceDisplay.textContent = '❔';
          computerChoiceDisplay.textContent = '❔';
          play_score.textContent = 'Player score: 0';
          comp_score.textContent = 'Computer score: 0';
          player_score = 0;
          computer_score = 0;
          buttons.forEach(button => {
            button.disabled = false;
          });
        });
      }
    });
  });  