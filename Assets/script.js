var starter = document.getElementById("start")
var timerEl = document.getElementById("timer")
var questionBlock = document.getElementById("questions")
var choicesBlock = document.getElementById("choices")
var container = document.getElementById("container")

let questions = [
    {
        question: "Question 1",
        choices: ["one", "two", "three", "four"],
        answer: "four"

    }, {
        question: "Question 2",
        choices: ["right", "wrong", "wrong", "wrong"],
        answer: "right"
    }
]

var timeLeft = 100;

function timeDeduction() {
    window.timeLeft = timeLeft - 10;
}

function gameOver() {
    document.getElementById("title").innerHTML = "Game Over! Enter your name in the leaderboard!"
    timerEl.remove();
    choicesBlock.replaceChildren('');
    questionBlock.textContent = ('');
    var form = document.createElement('form');
    container.append(form);

}

function startGame() {
    starter.remove();
    document.getElementById("title").innerHTML = "Read carefully! Every incorrect answer loses you 10 seconds!";

    var gameTimer = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = timeLeft + ' seconds remaining';
        }

        else {
            clearInterval(gameTimer);
            timerEl.textContent = "Time is up!";
            gameOver();
        }
    }, 1000);

    questionBlock.textContent = questions[0].question;

    for (var i = 0; i < questions[0].choices.length; i++) {
        const newSpan = document.createElement('button')
        newSpan.innerText = questions[0].choices[i];
        choicesBlock.append(newSpan);
        newSpan.addEventListener('click', function (event) {
                var choice = event.target.innerText
                var answer = questions[0].answer
                console.log(choice)
                console.log(answer)

                if (choice === answer) {
                    console.log("winner")
                    choicesBlock.replaceChildren('')
                    secondQuestion();
                    
                }else{
                    console.log("loser")
                    timeDeduction();
                    choicesBlock.replaceChildren('')
                    secondQuestion();
                    
                }
        })

    }
}

function secondQuestion() {
    questionBlock.textContent = questions[1].question;

    for (var i = 0; i < questions[1].choices.length; i++) {
        const newSpan = document.createElement('button')
        newSpan.innerText = questions[1].choices[i];
        choicesBlock.append(newSpan);
        newSpan.addEventListener('click', function (event) {
                var choice = event.target.innerText
                var answer = questions[1].answer
                console.log(choice)
                console.log(answer)

                if (choice === answer) {
                    console.log("winner")
                    
                }else{
                    console.log("loser")
                    timeDeduction();
                }
        })

    }
}

