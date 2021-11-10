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
var enterEl = document.querySelector(".enterScore");
var highScoreEl = document.querySelector(".highScore");
var startEl = document.querySelector("#start-btn");
var timerEl = document.querySelector('.countdown');
var mainEl = document.querySelector('#main');
var answersEl = document.querySelector(".answerContainer");
var showQs = document.getElementById('displayQs');
var responseEL = document.getElementById('#response');
var scoresEL = document.getElementById('#scoresList');


//var answerEl = document.querySelector(".answerButton");

function hideItems(){
  enterEl.classList.add('hide');
  highScoreEl.classList.add('hide');
}

hideItems();


function startGame(){
 
  startEl.classList.add('hide');
  createQuestion(questions);
  setTimer();
 
}

startEl.addEventListener("click", function() {
  startGame()
});

  //function to load the first question 
function createQuestion(){
   
   
    //var count = 0;
        //create
       var pEl = document.createElement('p');
      
       //update
      // pEl.textContent = questions[count].question;
      pEl.textContent = questions[questionsIndex].question;
      //append
       //questionEl.appendChild(pEl);

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
      score += 1
      // var check = "correct";
      // check.textContent = check;
      // responseEL.appendChild(check);
    } else {
      alert ('incorrect');
      incorrect += 
      
      seconds -= 5;
    }

   questionsIndex++;

   if(questionsIndex === questions.length){
     endGame()
   } else {
     createQuestion()
   }
  }

  function setTimer(){

  var timeInterval = setInterval(function(){

  seconds--
  timerEl.textContent = seconds

if(seconds === 0 ||questionsIndex === questions.length){
    timerEl.textContent = '0';
    clearInterval(timeInterval);
    //alert("Game Over")
    endGame()
  }

  }, 1000)

  };

 
    

function endGame (){
  
  scoreTotal.textContent = score;
  localStorage.setItem("scoreTotal" ,score)
   enterEl.classList.remove('hide');
   questionEl.classList.add('hide');
   answersEl.classList.add('hide');
   //timerEl.classList.add('hide');
   questionsIndex = 0;
  
}


// var userInitials = document.getElementById('#user-initials');
// var initials = document.querySelector('#initials').value;

// function displayInitial (){
//   localStorage.setItem('initials',initials)

// }
// var localInitials = localStorage.getItem('initials');
// userInitials.textContent = localInitials;
// displayInitial();



//var scoreEl = document.getElementById("scoreTotal")
var replayEl = document.getElementById("playAgain");
var submitEl = document.getElementById('submit');
var backEl = document.getElementById('goBack');
//var clearEl = document.getElementById('clear');


submitEl.addEventListener("click", function() {
  viewScore();
  playerInitials = initials.value;
  console.log(playerInitials);
  console.log(score);

  

});

replayEl.addEventListener("click", function() {
  questionEl.classList.remove('hide');
  answersEl.classList.remove('hide');
  highScoreEl.classList.add('hide');
  enterEl.classList.add('hide');
  seconds = 20
  score = 0
  incorrect = 0
  //timerEl.classList.remove('hide');
  startGame();
  
});

backEl.addEventListener("click", function() {
  //questionEl.classList.remove('hide');
  //answersEl.classList.remove('hide');
  highScoreEl.classList.add('hide');
  enterEl.classList.remove('hide');
  seconds = 20
  score = 0
  incorrect = 0
  //timerEl.classList.remove('hide');
  //startGame();
});


function viewScore(){
  highScoreEl.classList.remove('hide');
  enterEl.classList.add('hide');
  
}



 // function saveDetails() {
  //  //var initials= localStorage.getItem("initials");
  //  //userInitialSpan.textContent = initials;
  // //localStorage.setItem("initials" ,initials)
  //   }