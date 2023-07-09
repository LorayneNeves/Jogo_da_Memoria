const button = document.querySelector('.api-button');
const button1 = document.querySelector('.game-button');
const form = document.querySelector('.api-form');
const form1 = document.querySelector('.game-form1');

const APIPersonagens = (event) => {
  event.preventDefault();
  window.location.href = 'pages/api.html';
}

const Game = (evento) => {
  evento.preventDefault();
  window.location.href = 'login.html';
}

form.addEventListener('submit', APIPersonagens);
form1.addEventListener('submit', Game);