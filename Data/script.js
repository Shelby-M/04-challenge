var timer = 60; //decrease by one for every second that passes
var questionIndex = 0; //increase everytime changeQuestion() is called
var score = 0; //increase everytime correct answer selected; 
const startButton = document.getElementById('startBtn');
const nextButton = document.getElementById('nextBtn');
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById ('answer-btn')
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener( 'click', startGame);
nextButton.addEventListener ('click', () =>{
    currentQuestionIndex++
    setNextQuestion()

})

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5) 
    questionContainerEl.classList.remove('hide')
    currentQuestionIndex = 0;
    setNextQuestion() 
    gameTimer() //starts timer

    
}

function gameTimer() {
    var countDown = setInterval(function() {
        timer--;
        document.getElementById("timer").innerText = timer;
        if (timer <=0) {
            clearInterval(countDown);
            nextButton.classList.add('hide');
            endGame();
        }
    }, 1000);
}


//function onanswerClick(){
    //get reference to answer clicked on
    //check what answer in the array for options matches for this question
    //compare answer choice to the correct answer to this question
    //if correct, increase score, increase questionIndex and call setQuestion() 
    //if wrong, decrease timer and call setQuestion()
//}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    //set question and answer choices in html

}

function showQuestion (question){
questionEl.innerText=question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonEl.appendChild(button)
    
});

}

function resetState () {
    nextButton.classList.add('hide')
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild
        (answerButtonEl.firstChild)
    }
}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    } else{
        startButton.classList.remove('hide')
    }

   
}

function setStatusClass(element, correct){
clearStatusClass(element)
if(correct) {
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
}
}

function clearStatusClass (element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "what is not a coding language?",
        answers: [ 
            {text: "ABCD", correct: true },
            {text: "HTML", correct: false},
            {text: "CSS", correct: false}
            
        ]
        
    },

    {
        question: "What tag defines an unordered list?",
        answers: [ 
            {text:"<ul>" , correct:true}, 
            {text:"<li>" , correct:false},
            {text:"<hi>" , correct: false}
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {text:"Huge Typing Man Lion", correct:false}, 
            {text:"Hyper Text Markup Language", correct:true}, 
            {text:"Hyper Typing Markup Language", correct:false}
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {text:"Cool Shoes Shaggy", correct:false},
            { text:"Create Secure Safety", correct:false},
            {text: "Cascading style sheet", correct: true}
        ]
    },
    { 
          question: "What does || stand for?",
        answers: [
            {text:"Of", correct:false},
            {text: "Or", correct:true},
            {text: "For", correct: false}
        ]
    }
    
]

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