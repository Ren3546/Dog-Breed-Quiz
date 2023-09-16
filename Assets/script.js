var countTime = document.getElementById("start")
var timerEl = document.getElementById("timer")


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
}
