var hands = ["Rock", "Paper", "Scissors"];

var mW = 0;
var cW = 0;

function playRound(){
    var computer = hands[parseInt(Math.random()*10)%3];
    var maurice = hands[parseInt(Math.random()*10)%3];
    if (maurice == "Rock" && computer == "Scissors"){
        mW = mW + 1; 
        return  "Maurice is the winner!";
     } else if (maurice == "Paper" && computer == "Rock"){
        mW = mW + 1;
        return "Maurice is the winner!"
     } else if (maurice == "Scissors" && computer == "Paper"){
        mW = mW + 1;
        return "Maurice is the winner!"
     } else if (maurice == computer){
        return "It's a tie!"
     } else {
        cW = cW + 1;
        return "Computer is the winner!"
    }
}

while (mW < 3 && cW < 3){
   console.log(playRound());
}