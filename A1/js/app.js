let playerScore = 0;
let computerScore = 0;

const images = {
  'rock': 'https://thumb.silhouette-ac.com/t/69/69ffced83032519ca680dc3058b9ca26_t.jpeg',
  'scissors': 'https://thumb.silhouette-ac.com/t/a7/a7c3020b4cfb4fd154c4fcfd62702df2_t.jpeg',
  'paper': 'https://thumb.silhouette-ac.com/t/26/2654adfd65b6ca4a8ac25a9f727d2262_t.jpeg'
};

function playGame(userChoice) {
  const choices = ['rock', 'scissors', 'paper'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = 'Tie! You and the computer both chose ' + userChoice;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = 'You won! ' + userChoice + ' beats ' + computerChoice;
    playerScore++;
  } else {
    result = 'Computer won! ' + computerChoice + ' beats ' + userChoice;
    computerScore++;
  }

  document.getElementById('result').textContent = result;
  document.getElementById('playerWins').textContent = playerScore;
  document.getElementById('computerWins').textContent = computerScore;

  const userImage = document.getElementById('userChoiceImage');
  userImage.src = images[userChoice];
  userImage.style.display = 'block';
  const computerImage = document.getElementById('computerChoiceImage');
  computerImage.src = images[computerChoice];
  computerImage.style.display = 'block';
}

