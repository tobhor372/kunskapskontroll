let playerWins = 0;
let playerLosses = 0;
let draws = 0;

const images = {
  'rock': 'https://thumb.silhouette-ac.com/t/69/69ffced83032519ca680dc3058b9ca26_t.jpeg',
  'scissors': 'https://thumb.silhouette-ac.com/t/a7/a7c3020b4cfb4fd154c4fcfd62702df2_t.jpeg',
  'paper': 'https://thumb.silhouette-ac.com/t/26/2654adfd65b6ca4a8ac25a9f727d2262_t.jpeg'
};

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookiesArray = document.cookie.split(';');
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

function saveResultsToCookies() {
  setCookie('playerWins', playerWins, 7);  // Sparar i 7 dagar
  setCookie('playerLosses', playerLosses, 7);
  setCookie('draws', draws, 7);
}

function loadPreviousResultsFromCookies() {
  const savedWins = getCookie('playerWins');
  const savedLosses = getCookie('playerLosses');
  const savedDraws = getCookie('draws');

  if (savedWins !== null) {
    document.getElementById('previousPlayerWins').textContent = savedWins;
  }
  if (savedLosses !== null) {
    document.getElementById('previousPlayerLosses').textContent = savedLosses;
  }
  if (savedDraws !== null) {
    document.getElementById('previousDraws').textContent = savedDraws;
  }
}

function playGame(userChoice) {
  const choices = ['rock', 'scissors', 'paper'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = 'Tie! You and the computer both chose ' + userChoice;
    draws++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = 'You won! ' + userChoice + ' beats ' + computerChoice;
    playerWins++;
  } else {
    result = 'Computer won! ' + computerChoice + ' beats ' + userChoice;
    playerLosses++;
  }

  document.getElementById('result').textContent = result;
  document.getElementById('playerWins').textContent = playerWins;
  document.getElementById('playerLosses').textContent = playerLosses;
  document.getElementById('draws').textContent = draws;

  saveResultsToCookies();

  const userImage = document.getElementById('userChoiceImage');
  userImage.src = images[userChoice];
  userImage.style.display = 'block';

  const computerImage = document.getElementById('computerChoiceImage');
  computerImage.src = images[computerChoice];
  computerImage.style.display = 'block';
}
window.onload = loadPreviousResultsFromCookies;

