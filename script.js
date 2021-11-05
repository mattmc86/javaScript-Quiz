
//assigning variables to HTML elements
var questionEl = document.querySelector(".questionContainer");
var startEl = document.querySelector("#start-btn");
var answerEl = document.querySelector(".answerButton");


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
      answers: ["Strings", "Numbers", "Boolean", "All of the above"],
      correctAnswer: "All of the above",
    },
];
  
console.log(questions)

  let questionsIndex = 0;

function createQuestion(content){
    //questionEl.innerHTML ="";
    for (var i=0; i< content.length; i++){
        var currentQuestion = content[i];
        console.log(currentQuestion);
        //create
        var pEl = document.createElement('p');
        console.log()
        //update
        pEl.textContent = currentQuestion;
        //append
        questionEl.appendChild(pEl);

        //how to get choices into answerEl???

    }
}

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


createQuestion (questions);


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



