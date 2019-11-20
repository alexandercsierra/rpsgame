var rpsArr = ["ROCK", "PAPER", "SCISSORS"];
var userChoice = "";
var compChoice = "";
var resultText = "";
var outcome = document.querySelector(".outcome");
var winLoss = document.querySelector(".winLoss");



$("button").click(function(){
  compChoice = randomChoice();
  userChoice = $(this).text();
  round(userChoice, compChoice);
  $(".initialChoice").addClass("hide");
  $(".result").removeClass("hide");
  outcome.textContent = resultText;
});

$(".playAgain").click(function(){
  winLoss.textContent = "";
  outcome.textContent = "";
  location.reload();
});

function randomChoice(){
  var random = Math.floor(Math.random() * rpsArr.length);
  return rpsArr[random];
}

function round (user, comp) {
  if((user === "ROCK " && comp === "SCISSORS") || (user === "PAPER " && comp === "ROCK") || (user === "SCISSORS " && comp === "PAPER")) {
    return win();
  } else if ((user === "ROCK " && comp === "ROCK") || (user === "PAPER " && comp === "PAPER") || (user === "SCISSORS " && comp === "SCISSORS")) {
    return draw();
  } else {
    return lose();
  }
}


function win() {
  resultText = userChoice + "beats " + compChoice;
}

function lose() {
  resultText = compChoice + " beats " + userChoice;
  winLoss.textContent = "You Lose!"
}

function draw() {
  winLoss.textContent = "It\'s a draw."
  resultText = "You both picked " + compChoice;
}