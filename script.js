let Userchoice=prompt('Rock, paper, or scissors?')
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
function playRound(){
    let roundResult;
    let computer_score;
    let player_score;
    if(getComputerChoice()=='rock'&&Userchoice=='rock'){
        roundResult='Rock vs Rock? that is a tie!'
    }
    else if(getComputerChoice()=='paper'&&Userchoice=='paper'){
        roundResult='Paper vs Paper? that is a tie!'
    }
    else if(getComputerChoice()=='scissors'&&Userchoice=='scissors'){
        roundResult='scissors vs scissors? that is a tie!'
    }
    else if(getComputerChoice()=='rock'&&Userchoice=='paper'){
        roundResult='The user wins! paper covers rock!'
        player_score+=1;
    }
    else if(getComputerChoice()=='rock'&&Userchoice=='scissors'){
        roundResult='The computer wins! rock breaks scissors!'
        computer_score+=1;
    }
    else if(getComputerChoice()=='paper'&&Userchoice=='rock'){
        roundResult='The computer wins! paper covers  rock!'
        computer_score+=1;

    }
    else if(getComputerChoice()=='paper'&&Userchoice=='scissors'){
        roundResult='The user wins! scissors cuts paper!'
        player_score+=1;

    }
    else if(getComputerChoice()=='scissors'&&Userchoice=='paper'){
        roundResult='The computer wins! scissors cuts paper!'
        computer_score+=1;

    }
    else if(getComputerChoice()=='scissors'&&Userchoice=='rock'){
        roundResult='The user wins! rock breaks scissors!'
        player_score+=1;

    }
    else{
        return null;
    }
    return roundResult
}