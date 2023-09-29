// variable declarations
// querySelectors
var startCountDown = 90
var timer = document.querySelector("#time")
var startButton = document.querySelector(".start-button");
var questionArray = [
    question1 = {
        question: "What is JavaScript primarily used for?",
        correctAnswer: "Adding interactivity to web pages",
        incorrectAnswer1: "Styling web pages",
        incorrectAnswer2: "Creating web page layouts",
        incorrectAnswer3: "Sending emails" 
    },
    question2 = {
        question: "Which keyword is used to declare a variable in JavaScript?",
        correctAnswer: "var",
        incorrectAnswer1: "variable",
        incorrectAnswer2: "assign",
        incorrectAnswer3: "delcare"
    },
    question3 = {
        question: "What is the result of 10 + '10' in JavaScript?",
        correctAnswer: "'1010'",
        incorrectAnswer1: "20",
        incorrectAnswer2: "10 + 10",
        incorrectAnswer3: "'20'",
    },
    question4 = {
        question: "What is a valid way to comment in JavaScript?",
        correctAnswer: "// comment",
        incorrectAnswer1: "**comment**",
        incorrectAnswer2: "<!--comment-->",
        incorrectAnswer3: "::comment::",
    }, 
    question5 = {
        question: "Which JavaScript function is used to output data to the console for debuggin?",
        correctAnswer: "console.log()",
        incorrectAnswer1: "print()",
        incorrectAnswer2: "display()",
        incorrectAnswer3: "output()",
    },
    question6 = {
        question: "What does the '===' operator in JavaScript check for?",
        correctAnswer: "Both value and type equality",
        incorrectAnswer1: "Value equality",
        incorrectAnswer2: "Type equality",
        incorrectAnswer3: "Inequality",
    },
    question7 = {
        question: "What is '[ 2, 4, 6, 8]' an example of?",
        correctAnswer: "Array",
        incorrectAnswer1: "Object",
        incorrectAnswer2: "String",
        incorrectAnswer3: "List",
    },
    question8 = {
        question: "What is an example of camelcase?",
        correctAnswer: "camelCase",
        incorrectAnswer1: "Camelcase",
        incorrectAnswer2: "CamelCase",
        incorrectAnswer3: "CamelcasE",
    }
]

function startTimer() {
    setInterval(function() {
        timer.textContent = startCountDown
        startCountDown--
    }, 1000)
}


function startQuiz() {
    startTimer()
}

startButton.addEventListener("click", startQuiz)

// function to start the game
// listen for start button click
// start timer
// first question displays
// list of all answers
// add event listiner to answer buttons

// check to see if correct answer is selected with a function
//compare clicked button to the correct answer stored
// if wrong show wrong, and take time off timer
// if correct show correct
// goes to next question with the use of a function
// If end of questions, end the game
// if time runs out, end the game

// end game
// stop timer
// display score which is the time remaining
// have a form for initials and save score after initials have been submitted
// clear timer

//start again button that restarts the quiz
