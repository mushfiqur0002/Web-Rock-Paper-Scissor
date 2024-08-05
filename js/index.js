const choices = ["Rock", "Paper", "Scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const emojiDisplay = document.getElementById("emojiDisplay");


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    let result = "";
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }

    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissor") ?  "YOU WIN!" : "YOU LOSE!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ?  "YOU WIN!" : "YOU LOSE!";
                break;
            case "Scissor":
                result = (computerChoice === "Paper") ?  "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    
    switch(computerChoice){
        case "Rock":
            computerDisplay.textContent = `COMPUTER: ${computerChoice} ✊`;
            break;
        case "Paper":
            computerDisplay.textContent = `COMPUTER: ${computerChoice} 🖐️`;
            break;
        case "Scissor":
            computerDisplay.textContent = `COMPUTER: ${computerChoice} ✌️`;
            break;
    }


    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText",);

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            break;
    }

}