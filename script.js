let play_score=document.querySelector('.C-score')
let comp_score=document.querySelector('.P-score')
let winnerText=document.querySelector('.result-text')
let resultText=document.querySelector('.winner-text')
let UserChoice;
let computer_score = 0;
let player_score = 0;
let buttons = document.querySelectorAll('button');
let choices=0
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
    choices++
    // Start the game after the user makes a choice
    if(choices===5){
        game()
    }
  });
});
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

//    for(let i=0;i<5;i++){
//        const compChoice=getComputerChoice();
//        console.log(playRound(compChoice))
//    }
    if(player_score>computer_score){
        winnerText.textContent='You win!'
    }
    else if(player_score<computer_score){
        winnerText.textContent='You lose!'

    }
    else {
        winnerText.textContent='You tied!'
    }
}
