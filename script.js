var questions = [
    {
      question: "Which of the following is not a data type",
      choices: ["String", "Alert", "Boolean", "Number"],
      correctAnswer: "Alert",
    },
    {
      question: "A very useful debugging tool is the.......",
      choices: ["Console Log", "Browser", "Repellent", "For Loop"],
      correctAnswer: "Console Log",
    },
    {
     question: "The condition in an IF statement must be stored in .......",
       choices: [
       "Curly Brackets",
        "Sqaure Brackets",
        "parentheses",
        "semi colons",
      ],
      correctAnswer: "parentheses",
    },
    {
       question: "Arrays in Javascript can be used to store........",
      choices: ["Strings", "Numbers", "Boolean", "All of the above"],
      correctAnswer: "All of the above",
    },

]; 
let questionsIndex = 0;

//assigning variables to HTML elements
var questionEl = document.querySelector(".questionContainer");
var startEl = document.querySelector("#start-btn");
var timerEl = document.querySelector('.countdown');
var mainEl = document.querySelector('#main');
var answersEl = document.querySelector(".answerContainer");
var showQs = document.getElementById('displayQs');
var responseEL = document.getElementById('response');

//var answerEl = document.querySelector(".answerButton");



function startGame(){
 
  startEl.classList.add('.hide');
  createQuestion(questions);
  setTimer();
 
}

startEl.addEventListener('click', startGame());
//startEl.addEventListener('click', createQuestion (questions));


  //function to load the first question 
function createQuestion(){
   
    //questionEl.innerHTML =""; - don't think this is needed anymore
    var count = 0;
        //create
       var pEl = document.createElement('p');
      
       //update
       pEl.textContent = questions[count].question;
      //append
       questionEl.appendChild(pEl);

       showQs.textContent = questions[questionsIndex].question

       var buttonArea = document.getElementById('answerContainer');
       buttonArea.innerHTML =''
  
       // loop for generating new button for each choice
       for (var i=0; i <=questions[questionsIndex].choices.length; i++){

        var buttonEl = document.createElement("button");
        buttonEl.setAttribute('class', 'background: purple');
    
        buttonEl.textContent = questions[questionsIndex].choices[i];

        buttonEl.onclick = checkAnswer

        answersEl.appendChild(buttonEl);
  
      }

    }

  let seconds = 20
  let score = 0
  let incorrect = 0


  function checkAnswer(){

    if(this.textContent === questions[questionsIndex].correctAnswer){
      
      alert('correct');
      // score += 1
      // var check = "correct";
      // check.textContent = check;
      // responseEL.appendChild(check);
    } else {
      alert ('incorrect');
      incorrect += 
      
      seconds -= 5;
    }

    //  timerEl.textContent = seconds


   questionsIndex++;

   if(questionsIndex === questions.length){
     endGame()
   } else {
     createQuestion()
   }


  }

  //timerelement 
    //startGame.addEventListener('click', function setTimer(){

  function setTimer(){

  var timeInterval = setInterval(function(){

  seconds--
  timerEl.textContent = seconds

if(seconds === 0){
    timerEl.textContent = '0';
    clearInterval(timeInterval)
    alert("Game Over")
    endGame()
  }

  }, 1000)

  };


function endGame (){
   alert(score);
   window.location.href = 'enterScore.html';

   //<a href= "highScore.html">HighScores</a>
  // add play again button
  // add name and submit button
  
}

var replayEl = document.getElementById("playAgain")
var submitEl = document.getElementById('submit')
var backEl = document.getElementById('goBack')
var clearEl = document.getElementById('clear')

submitEl.addEventListener('click', viewScore());
replayEl.addEventListener('click', startGame());
backEl.addEventListener('click', startGame());


function viewScore(){
  window.location.href = 'highScore.html';
}

