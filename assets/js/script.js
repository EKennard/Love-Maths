
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    // for (let i = 0; i < buttons.length; i++) {}  
    // - let i = 0; → This starts the loop at 0 (the first item in the list).
    // - i < buttons.length; → This checks that i is still within the range of the array.
    // - i++ → This increments i (adds 1 each time the loop runs).
    // - {} → This holds the code that will be executed for each button.
    // - not using the way of writing it for this project.
    for (let button of buttons) {
        // - buttons is assumed to be an array or a list containing multiple elements (probably a   collection of button elements on a webpage).
        // - The loop goes through each item inside buttons, one at a time.
        // - let button creates a temporary variable for the current item in the loop.
        // - Inside the {}, you can write code that will be executed for each button.
        // Think of it like checking all items in a list, one by one, and doing something with each!
        button.addEventListener("click", function () {
            // - button.addEventListener("click", function() {...})
            // - button refers to a button element.
            // - .addEventListener("click", ...) means "listen for a click event."
            // - function() {...} is the code that runs when the button is clicked.
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
                // - this.getAttribute("data-type") → This retrieves the value of the data-type attribute from an element.
                // - === "submit" → This checks if the value is "submit" (meaning the button is a submit button).
                // - alert("You clicked Submit!"); → If the condition is true, this shows a pop-up message.
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`)
                // - else {} → Runs only if the if condition is false.
                // - let gameType = this.getAttribute("data-type"); → Retrieves the data-type attribute from the clicked button and stores it in gameType.
                // - **alert(\You clicked ${gameType}`);** → Displays a pop-up message with the value of gameType`
            }
        })

    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}