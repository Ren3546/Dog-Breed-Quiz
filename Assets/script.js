var starter = document.getElementById("start")
var timerEl = document.getElementById("timer")
var questionBlock = document.getElementById("questions")
var choicesBlock = document.getElementById("choices")
var container = document.getElementById("container")
var formEl = document.getElementById('form')
var leaderBoardHolder = document.getElementById('leaderBoardHolder')
var leaderBoard;

//questions and answers object
let questions = [
    {
        choices: ["Labrador", "Beagle", "Basset Hound", "Jask Russell Terrier"],
        answer: "Beagle"

    }, {
        choices: ["Wolfhound", "Borzoi", "Afghan Hound", "Labradoodle"],
        answer: "Wolfhound"
    }, {
        choices: ["Poodle", "Portugese Water Dog", "Springer Spaniel", "Lagotto Romagnolo"],
        answer: "Portugese Water Dog"
    }, {
        choices: ["Long-haired Chihuahua", "Pomeranian", "Yorkshire Terrier", "Papillon"],
        answer: "Papillon"
    }, {
        choices: ["American Bull Dog", "Staffordshire Bull Terrier", "Bull Mastiff", "Cane Corso"],
        answer: "American Bull Dog"
    }
]

//timer variable
var timeLeft = 100;

//reduces timer by 15 seconds
function timeDeduction() {
    window.timeLeft = timeLeft - 15;
}

//user's score
var userSc = 0;

//user's score increases by 50 points with every correct answer
function userScore() {
    userSc = userSc + 50;
}

//once timer ends or all questions answered, replaces header text and changes to username entry
function gameOver() {
    document.getElementById("title").innerHTML = "Game Over! Enter your name in the leaderboard!"
    choicesBlock.replaceChildren('');
    questionBlock.textContent = ('');
    usernameForm();
}

//form for username input
function usernameForm (){
    var form = document.createElement('input');
    form.setAttribute('type','text');
    form.setAttribute('name','text');
    form.setAttribute('id','text');
    form.setAttribute('size',50);
    form.setAttribute('placeholder','Enter your Username');
    formEl.append(form)
    var submit = document.createElement('button');
    submit.innerText = "submit";
    formEl.append(submit)
}

//once username is submitted, runs leaderboard function with inputted text.
    formEl.addEventListener("click", function(event) {
        event.preventDefault();
        timerEl.remove();
        var name = document.querySelector("#text").value;

        if (name === "") {
            return;
        }else{
            localStorage.setItem("Username", name);
            leaderBoard();
        }
   
})

//displays username and score
function leaderBoard() {
        document.getElementById("title").innerHTML = "Leaderboard &#128081;";
        form.remove();
        var leader = document.createElement('p');
        leader.innerText = localStorage.getItem("Username") + " " + userSc + "pts";
        leaderBoardHolder.append(leader);

}

//changes header to the question, starts timer
function startGame() {
    starter.remove();
    document.getElementById("title").innerHTML = "Name the dog breed"

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

//image for question
    var dog1 = document.createElement("img");
    dog1.src = "./Assets/images/dog1.jpg";
    var imgBlock = document.getElementById("questions");
    imgBlock.append(dog1)

//for loop to show all 4 possible choices
    for (var i = 0; i < questions[0].choices.length; i++) {
        const newSpan = document.createElement('button')
        newSpan.innerText = questions[0].choices[i];
        choicesBlock.append(newSpan);
        newSpan.addEventListener('click', function (event) {
                var choice = event.target.innerText
                var answer = questions[0].answer
                console.log(choice)
                console.log(answer)
//correct answer will increase user score and move on to next question
                if (choice === answer) {
                    choicesBlock.replaceChildren('')
                    dog1.remove();
                    userScore();
                    secondQuestion();
//incorrect answer will reduce time by 15 seconds then on to next question
                }else{
                    dog1.remove();
                    timeDeduction();
                    choicesBlock.replaceChildren('')
                    secondQuestion();
                    
                }
        })

    }
}

function secondQuestion() {
    var dog2 = document.createElement("img");
    dog2.src = "./Assets/images/dog2.jpg";
    var imgBlock = document.getElementById("questions");
    imgBlock.append(dog2)

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
                    dog2.remove();
                    choicesBlock.replaceChildren('');
                    userScore();
                    thirdQuestion();
                    
                }else{
                    dog2.remove();
                    choicesBlock.replaceChildren('');
                    timeDeduction();
                    thirdQuestion();
                }
        })

    }
}

function thirdQuestion() {
    var dog3 = document.createElement("img");
    dog3.src = "./Assets/images/dog3.jpg";
    var imgBlock = document.getElementById("questions");
    imgBlock.append(dog3)


    for (var i = 0; i < questions[2].choices.length; i++) {
        const newSpan = document.createElement('button')
        newSpan.innerText = questions[2].choices[i];
        choicesBlock.append(newSpan);
        newSpan.addEventListener('click', function (event) {
                var choice = event.target.innerText
                var answer = questions[2].answer
                console.log(choice)
                console.log(answer)

                if (choice === answer) {
                    dog3.remove();
                    choicesBlock.replaceChildren('');
                    userScore();
                    fourthQuestion();
                    
                }else{
                    choicesBlock.replaceChildren('');
                    dog3.remove();
                    timeDeduction();
                    fourthQuestion();
                }
        })

    }
}

function fourthQuestion() {
    var dog4 = document.createElement("img");
    dog4.src = "./Assets/images/dog4.jpg";
    var imgBlock = document.getElementById("questions");
    imgBlock.append(dog4)

    for (var i = 0; i < questions[3].choices.length; i++) {
        const newSpan = document.createElement('button')
        newSpan.innerText = questions[3].choices[i];
        choicesBlock.append(newSpan);
        newSpan.addEventListener('click', function (event) {
                var choice = event.target.innerText
                var answer = questions[3].answer
                console.log(choice)
                console.log(answer)

                if (choice === answer) {
                    dog4.remove();
                    choicesBlock.replaceChildren('');
                    userScore();
                    fifthQuestion();
                    
                }else{
                    choicesBlock.replaceChildren('');
                    dog4.remove();
                    timeDeduction();
                    fifthQuestion();
                }
        })

    }
}

function fifthQuestion() {
    var dog5 = document.createElement("img");
    dog5.src = "./Assets/images/dog5.jpg";
    var imgBlock = document.getElementById("questions");
    imgBlock.append(dog5)

    for (var i = 0; i < questions[4].choices.length; i++) {
        const newSpan = document.createElement('button')
        newSpan.innerText = questions[4].choices[i];
        choicesBlock.append(newSpan);
        newSpan.addEventListener('click', function (event) {
                var choice = event.target.innerText
                var answer = questions[4].answer
                console.log(choice)
                console.log(answer)

                if (choice === answer) {
                    dog5.remove();
                    choicesBlock.replaceChildren('');
                    userScore();
                    window.timeLeft = 0;
                    
                }else{
                    choicesBlock.replaceChildren('');
                    dog5.remove();
                    window.timeLeft = 0;
                }
        })

    }
}

