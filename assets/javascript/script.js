// variable declarations
// querySelectors
var startCountDown = 90
var questionNumber = 0
var answersArray = [1, 2, 3, 4]

var timer = document.querySelector("#time");
var startButton = document.querySelector(".start-button");
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var questionEl = document.querySelector("#question");
var title1 = document.querySelector("#title1");
var title2 = document.querySelector("#title2");
var title3 = document.querySelector("#title3");
var title4 = document.querySelector("#title4");
var answerEl1 = document.querySelector("#answer1");
var answerEl2 = document.querySelector("#answer2");
var answerEl3 = document.querySelector("#answer3");
var answerEl4 = document.querySelector("#answer4");
var correct = true

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
        question: "Which JavaScript function is used to output data to the console for debugging?",
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

function newTime() {
    timer.textContent = startCountDown
}

function startTimer() {
    var countdown = setInterval(function() {
        if (startCountDown <= 0) {
            clearInterval(countdown)
            questions.setAttribute("style", "display: none")
            answers.setAttribute("style", "display: none")
            startCountDown = 0
            newTime()
        } else {
            startCountDown--
            newTime()
        }
    }, 1000) 
}


function correctA() {
      correct = true
      nextQuestion()
    }

function wrongA() {
    correct = false
    startCountDown -= 10
    newTime()
    nextQuestion()
    if (startCountDown <= 0) {
        questions.setAttribute("style", "display: none")
        answers.setAttribute("style", "display: none")
    }
}
    
    function nextQuestion() {
        questionEl.textContent = questionArray[questionNumber].question
        answerEl2.textContent = questionArray[questionNumber].correctAnswer
        answerEl4.textContent = questionArray[questionNumber].incorrectAnswer1
        answerEl1.textContent = questionArray[questionNumber].incorrectAnswer2
        answerEl3.textContent = questionArray[questionNumber].incorrectAnswer3
        answerEl2.addEventListener("click",correctA)
        answerEl1.addEventListener("click",wrongA)
        answerEl3.addEventListener("click",wrongA)
        answerEl4.addEventListener("click",wrongA)
        if (correct) {
            console.log("correct");
        } else console.log("incorrect");
        questionNumber++
    }
    
    
function startQuiz() {
    startTimer()
    title1.setAttribute("style", "display: none")
    title2.setAttribute("style", "display: none")
    title3.setAttribute("style", "display: none")
    title4.setAttribute("style", "display: none")
    startButton.setAttribute("style", "display: none")
    questions.setAttribute("style", "display: flex")
    answers.setAttribute("style", "display: flex")
    nextQuestion()
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
