let UserChoice;
let computer_score=0;
let player_score=0;
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
    let UserChoice=prompt('Rock, paper, or scissors?')
    let roundResult;
    if(compChoice.toLowerCase()=='rock'&&UserChoice.toLowerCase()=='rock'){
        roundResult='Rock vs Rock? that is a tie!'
    }
    else if(compChoice.toLowerCase()=='paper'&&UserChoice.toLowerCase()=='paper'){
        roundResult='Paper vs Paper? that is a tie!'
    }
    else if(compChoice.toLowerCase()=='scissors'&&UserChoice.toLowerCase()=='scissors'){
        roundResult='scissors vs scissors? that is a tie!'
    }
    else if(compChoice.toLowerCase()=='rock'&&UserChoice.toLowerCase()=='paper'){
        roundResult='The user wins! paper covers rock!'
        player_score+=1;
    }
    else if(compChoice.toLowerCase()=='rock'&&UserChoice.toLowerCase()=='scissors'){
        roundResult='The computer wins! rock breaks scissors!'
        computer_score+=1;
    }
    else if(compChoice.toLowerCase()=='paper'&&UserChoice.toLowerCase()=='rock'){
        roundResult='The computer wins! paper covers  rock!'
        computer_score+=1;

    }
    else if(compChoice.toLowerCase()=='paper'&&UserChoice.toLowerCase()=='scissors'){
        roundResult='The user wins! scissors cuts paper!'
        player_score+=1;

    }
    else if(compChoice.toLowerCase()=='scissors'&&UserChoice.toLowerCase()=='paper'){
        roundResult='The computer wins! scissors cuts paper!'
        computer_score+=1;

    }
    else if(compChoice.toLowerCase()=='scissors'&&UserChoice.toLowerCase()=='rock'){
        roundResult='The user wins! rock breaks scissors!'
        player_score+=1;

    }

    return roundResult
}
function game(){
    for(let i=0;i<5;i++){
        const compChoice=getComputerChoice();
        console.log(playRound(compChoice))
    }
    if(player_score>computer_score){
        console.log('You win!')
    }
    else if(player_score<computer_score){
        console.log('you lose!(get rekt lol)')

    }
    else {
        console.log('You and the computer are equal')
    }
}
game()