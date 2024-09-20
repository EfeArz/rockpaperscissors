"use strict";
const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let computerScore = 0;
let playersScore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";
    if(playerChoice === computerChoice){
        result = "It's a Tie!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice==="scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice==="rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChoice==="paper") ? "You Win!" : "You Lose!";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");
    switch(result){
        case "You Win!":
            playersScore+=1
            resultDisplay.classList.add("greenText");
            playerScoreDisplay.textContent = playersScore;

            break;
        case "You Lose!":
            computerScore+=1;
            resultDisplay.classList.add("redText");
            computerScoreDisplay.textContent = computerScore;
            break;  
    }


}