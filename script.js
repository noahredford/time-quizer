const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var timEl = document.getElementById("time")
var secondsLeft = 60;
let shuffledQuestions, currentQuestionIndex


function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timEl.textContent = secondsLeft + "test";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 60000)
}


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


// We need to start the game. This function will start the game:
 function startGame() {
    console.log('Started!') // Tests the functionality of the start button
    startButton.classList.add('hide') // This will hide the start button when we click on it
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide') // This will remove the hide on the question container
    setNextQuestion()
 }

 // We need a function that will set the next question:
 function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

 }


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState () {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


 // We need to set a function that will do something when we select an answer
 function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
 }

 function setStatusClass(element, correct) {
    clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
 }


 function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

 }

 const questions = [
    {
        question: 'How much is our application fee?',
        answers: [
            {text: '$10', correct: false},
            {text: '$40', correct: false},
            {text: '$35', correct: true}, 
            {text: '$25', correct: false}
        ]
    },
    {
        question: 'Is JavaScript the same thing as Java?',
        answers: [
            {text: 'Yes', correct: false}, 
            {text: 'No', correct: true}
        ]
    },
    {
        question: 'What is console.log used for?',
        answers: [
            {text: 'It is used to test functions, variables, and other items in your JavaScript coding', correct: true}, 
            {text: 'It adds a text file to your JavaScript', correct: false},
            {text: 'It allows you to link your HTML and CSS files', correct: false},
            {text: 'It creates a function in JavaScript', correct: false}
        ]
    },
    {
        question: 'Arrays are lists that you can call on in JavaScript',
        answers: [
            {text: 'False', correct: false},
            {text: 'True', correct: true}
        ]
    },
    {
        question: 'JavaScript does not use functions or arrays',
        answers: [
            {text: 'False', correct: true}, 
            {text: 'True', correct: false}
        ]
    },
    {
        question: 'Which of the following is the correct way functions are written?',
        answers: [
            {text: 'function Name()', correct: true}, 
            {text: 'function', correct: false},
            {text: '()function', correct: false},
            {text: 'var = function', correct: false}
            
        ]
    },

 ]

