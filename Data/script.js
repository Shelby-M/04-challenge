var timer = 60; //decrease by one for every second that passes
var questionIndex = 0; //increase everytime changeQuestion() is called
var score = 0; //increase everytime correct answer selected; 
const startButton = document.getElementById('startBtn');
const nextButton = document.getElementById('nextBtn');
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById ('answer-btn')
let shuffledQuestions, currentQuestionIndex


const questionS = [
    {
        question: "what is not a coding language?",
        answers: ["ABCD", "HTML", "Java Script"],
        correctAnswer: [0]
    },
    {
        question: "What tag defines an unordered list?",
        answers: [ "<ul>" , "<li>" , "<hi>"],
        correctAnswer:[0]
    },
    {
        question: "What does HTML stand for?",
        answers: ["Huge Typing Man Lion", "Hyper Text Markup Language", "Hyper Typing Markup Language"],
        correctAnswer:[1]
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cool Shoes Shaggy", "Create Secure Safety", "Cascading style sheet"],
        correctAnswer:[2]
    },
    { 
          question: "What does || stand for?",
        answers: ["Of", "Or", "For"],
        correctAnswer:[1]
    }
    
    ]

startButton.addEventListener( 'click', startGame);

function startGame(){
    console.log('started'); //runs when user clicks start button
    startButton.classList.add('hide');
    shuffledQuestions = questionS.sort(() => Math.random() - .5) 
    questionContainerEl.classList.remove('hide')
    currentQuestionIndex = 0;
    setNextQuestion()
    //start the timer
    //set the question and answer choices in html based on first question in the array
}


function onanswerClick(){
    //get reference to answer clicked on
    //check what answer in the array for options matches for this question
    //compare answer choice to the correct answer to this question
    //if correct, increase score, increase questionIndex and call setQuestion() 
    //if wrong, decrease timer and call setQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
    //set question and answer choices in html

}

function showQuestion (question){

}

function endGame(){
    //stop timer from decreasing
    //replace elements on page
    //show final score
    //show input to enter initials
    //show button to submit score
    //show highscores from local storage






 /* 
 {
     initials:"MM",
     score:79
 }
 //make an array for highscores in local storage if one does not exist
 //get stringified array from local storage
 //json.parse on stringified array
 //push new score object into array
 //stringify array
 //set stringified array back into local storage
 


 */
}