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

    }
    return choice;
}
