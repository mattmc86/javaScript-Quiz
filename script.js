
//assigning variables to HTML elements
var questionEl = document.querySelector(".questionContainer");
var startEl = document.querySelector("#start-btn");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
//var answerEl = document.querySelector(".answerButton");


//setting the questions, choices and correct answer
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
  
console.log(questions)

  let questionsIndex = 0;

  var buttonEl ="";

function createQuestion(content){
    //questionEl.innerHTML ="";
    var count = 0;
        //create
    var pEl = document.createElement('p');
       console.log(pEl);
       //update
       pEl.textContent = questions[count].question;
      //append
       questionEl.appendChild(pEl);
      
       buttonEl = document.createElement("button");
       buttonEl.textContent = questions[count].choices;
        questionEl.appendChild(buttonEl);
      // for(var i=0; questions[count].choices.length;i++){
      // // create button here
      // var buttonEl = document.createElement("button");
      // console.log(buttonEl)
      // // assign text from options
      // buttonEl.textContent = questions[count].choices;
      // //append
      // questionEl.appendChild(buttonEl);
      // //
      // }

    }

    //event listener to start the quiz - clicking on start button should trigger
    startEl.addEventListener('click', createQuestion (questions));

    buttonEl.addEventListener('click', loadNewQuestion(questions));
    
    //createQuestion (questions);
    // for (var i=0; i< content.length; i++){
    //     var currentQuestion = content[i];
    //     console.log(currentQuestion);
    //     //create
    //     var pEl = document.createElement('p');
    //     console.log()
    //     //update
    //     pEl.textContent = currentQuestion.question;
    //     //pEl.textContent = currentQuestion;
    //     //append
    //     questionEl.appendChild(pEl);

    // }


  function loadNewQuestion(event){
     console.log(questionsIndex);
    var questionsIndex = event.target.value
     createQuestion(questions[questionsIndex]);
  }

if (questionsIndex === 0){
    createQuestion(questions[questionsIndex]);
    startEl.setAttribute('value', questions.length +1);
   startEl.addEventListener("click", loadNewQuestion);
 }


 function countdown() {
  var timeLeft = 10;

  
  var timeInterval = setInterval(function () {
   
    timeLeft--;
    timerEl.textContent =  timeLeft; 

    if(timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage();
    }

  },1000);
}

function displayMessage() {
  
}

countdown()

//createQuestion (questions);


// const startButton = document.getElementById("start-btn");
// const questionContainerElement = document.getElementById("questionOne-container");


// let questionIndex = 0;

// const startButton = document.getElementById("start-btn");
// const questionContainerElement = document.getElementById("questionOne-container");

// //startButton.addEventListener('click', startQuiz)

// startButton.addEventListener("click", function startGame(event) {
//   // hide start
//   startButton.classList.add("hide");
//   // start timer

//   // get qs
//   getQs();
//   // call question function

// });

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



