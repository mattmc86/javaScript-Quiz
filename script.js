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
var showQs = document.getElementById('displayQs')
//var answerEl = document.querySelector(".answerButton");



function startGame(){
 
  startEl.classList.add('hide');
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
        buttonEl.setAttribute('class', '');
    
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


    // fix loadNewQuestion function so the next question and choices load as its not working 
    // first question is appearing straightaway when it should only display when createQuestion is called from eventlistner
    // fix timer function as its not working - its not stopping at 0 
    // all the logic about scoring and saving in local storage
    // the logic behind the timer being reduced if incorrect answer is selected
    // the logic if timer gets to zero or last question answered
    // the end page for high score and add initials and display high scores





function endGame (){
   alert(score);
  // add play again button
  // add name
  // event listener for viewScore 
}

function viewScore(){


}



















// function getQs() {
//   var currentQs = question[questionIndex];

//   //update

//   var screenEl = document.getElementById("display");//why is display here? I have no element with an ID of display
//   screenEl.textContent = currentQs.title; // what goes here?

//   // clear old qs

//   userchoice.innerHTML = "";

//   //loop over qs
//   currentQs.userchoice.array.forEach(function (choice, i) {
//     //create variable for button for each choice -

//     qbutton.setAttribute("class", "ansButton");
//     qbutton.setAttribute("value", choice);

//     qbutton.textContent = i + 1 + " " + choice;

//     //attach click event
//     qbutton.onclick = correctAnswer;

//     //display on screen
//     qbuttonEl.appendChild(ChoiceNode);
//   });
// }

// // function startQuiz(){
// // console.log("Started")
// // startButton.classList.add('hide');
// // questionContainerElement .classList.remove('hide');
// // timer();
// // }

// // function timer(){
// //     console.log("timer started")
// // }

// // function setNextQuestion(){

// // }

// // function selectAnswer(){

// // }

// // create variables for elements

// const pTags = document.querySelectorAll("p");
// const hTags = document.querySelectorAll("h1");

// hTags[0].setAttribute("style", "color:blue;");



