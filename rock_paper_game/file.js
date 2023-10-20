function getPlayerChoice(choice){
    choice = prompt("rock ,paper , sciscors")
    return choice
}


function getComputerChoice(){
    choices = ["rock","paper", "sciscors"];
     let  computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;

}

function playGame(playerChoice,computerChoice){

 if (playerChoice = "paper"){
    switch(computerChoice){
        case "rock":
            return "you win paper covers rock";
  
        case "paper":
            return "its a tie";

        case "sciscors" :
            return "you lose sciscors cut paper";
        
        }
        
}
else if (playerChoice == "rock"){

    
switch(computerChoice){
        case "rock":
            return  "its a tie ";

        case "paper":
            return "you lose paper covers rock";
         
        case "sciscors" :
            return "you win rock beats sciscors";
    
        }

}

else if (playerChoice == "sciscors"){

       switch(computerChoice){
        case "rock":
            return "you lose rock beats sciscors";

        case "paper":
            return "you win sciscors cut paper";

        case "sciscors" :
            return  "its a tie ";
  
        }

}

}

console.log(playGame(getPlayerChoice(/*your choice*/),getComputerChoice()))

