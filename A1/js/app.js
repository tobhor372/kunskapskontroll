let playerScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ['rock', 'scissors', 'paper'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = 'Oavgjort! Du och datorn valde båda ' + userChoice;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = 'Du vann! ' + userChoice + ' slår ' + computerChoice;
    playerScore++;
  } else {
    result = 'Datorn vann! ' + computerChoice + ' slår ' + userChoice;
    computerScore++;
  }

  document.getElementById('result').textContent = result;
  document.getElementById('playerWins').textContent = playerScore;
  document.getElementById('computerWins').textContent = computerScore;
}

