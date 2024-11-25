/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/



const choices = ["rock","paper","scissors"]

let playerChoice
let computerChoice
let msg


const resultDisplayEl = document.querySelector("#result-display")


const buttonChoicesElement = document.querySelectorAll(".button-choice")


// console.log(Math.ceil(1.5))
console.log()
const play = (event)=>{
        playerChoice = event.target.id
        const randomIndex = Math.floor(Math.random() * 3)
        computerChoice = choices[randomIndex]

        console.log(`Player choice = ${playerChoice}`)

        console.log("Computer choice = " + computerChoice)

    }


buttonChoicesElement.forEach((button)=>{
    button.addEventListener("click", play)
})