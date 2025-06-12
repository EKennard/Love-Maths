

// This code waits until the webpage has fully loaded before running. Then, it finds all the buttons on the page and sets up a system where each button listens for a user's click. When a button is clicked, the script checks its "data-type" attribute. If the button's type is "submit", a message appears saying, "You clicked Submit!". Otherwise, the script retrieves the button’s "data-type" value and displays a message like, "You clicked Multiplication", or whichever game type is stored in the attribute. This setup allows different buttons to trigger different responses based on their assigned type.


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    // Wait for the DOM to finish loading before running the game
    // Get the button elements and add event listeners to them

    // for (let i = 0; i < buttons.length; i++) {}  
    // - let i = 0; → This starts the loop at 0 (the first item in the list).
    // - i < buttons.length; → This checks that i is still within the range of the array.
    // - i++ → This increments i (adds 1 each time the loop runs).
    // - {} → This holds the code that will be executed for each button.
    // - not using the way of writing it for this project.
    for (let button of buttons) {
        // - buttons is a list containing multiple elements (a collection of button elements on the webpage).
        // - The loop goes through each item inside buttons, one at a time.
        // - let button creates a temporary variable for the current item in the loop.
         button.addEventListener("click", function() {
            // - button refers to a button element.
            // - .addEventListener("click", ...) means "listen for a click event."
            // - function() {...} is the code that runs when the button is clicked.
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                // - this.getAttribute("data-type") → This retrieves the value of the data-type attribute from an element.
                // - === "submit" → This checks if the value is "submit" (meaning the button is a submit button).
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`)
                // - else {} → Runs only if the if condition is false.
                // - let gameType = this.getAttribute("data-type"); → Retrieves the data-type attribute from the clicked button and stores it in gameType.
                // - **alert(\You clicked ${gameType}`);** → Displays a pop-up message with the value of gameType`
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});



/**
 * The main game "loop", called when the script is first loaded and after the user's answer has been processed
 */
function runGame(gameType) {
    //creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */


function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
    }
}

/**
 * Gets the operand (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 =  parseInt(document.getElementById('operand1').innertext);
    let operand2 =  parseInt(document.getElementById('operand2').innertext);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(` Inimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}