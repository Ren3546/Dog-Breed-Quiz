var countTime = document.getElementById("start")
var timerEl = document.getElementById("timer")
var questionBlock = document.getElementById("questions")
var choicesBlock = document.getElementById("choices")

let questions = [
    {
    question:"Question 1",
    choices: ["one","two","three","four"],
    answer: "right"
    
    },{
    question: "Question 2",
    choices: ["right", "wrong", "wrong", "wrong"],
    answer: "right"
    }
]


function startGame() {
    countTime.remove();
    var timeLeft = 100;
    
    var gameTimer = setInterval(function (){
    if (timeLeft > 0) {
        timeLeft--;
        timerEl.textContent = timeLeft + ' seconds remaining';
    }

    else{
    clearInterval(gameTimer);
    timerEl.textContent = "Time is up!";
    gameOver(); 
    }
  }, 1000);

    questionBlock.textContent = questions[0].question;
    
    for (var i=0; i < questions[0].choices.length; i++) {
        choicesBlock.append(questions[0].choices[i]);
    }
    
    var answer = document.querySelector("#choices");
    
    answer.addEventListener('click', function(event) {
        if (event.target === questions[0].choices[3])
        console.log("winner")
    })
        
}

