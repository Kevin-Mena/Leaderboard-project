import './style.css';
import { submitScore } from './submitScore.js';
import { displayGames } from './displayGames.js';

const form = document.querySelector('#add-score');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const refreshBtn = document.querySelector('#btn-refresh');
const errMsg = document.querySelector('#error');

const getID = async () => {
  const result = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'My cool new game',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const response = await result.json();
  console.log(response);
};
getID();

const GAME_API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nfRp4PrqV9I3ttAeAgHs/scores/';
const getGames = async () => {
  const response = await fetch(GAME_API_URL);
  const data = await response.json();
  const games = data.result;
  console.log(games);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (name.value.trim() === '' && score.value.trim() === '') {
    errMsg.style.display = 'block';
    errMsg.style.color = 'red';
    errMsg.innerHTML = 'Please fill in all fields!';
  } else {
    submitScore(name.value, score.value);
    form.reset();
  }
});

refreshBtn.addEventListener('click', () => {
  getGames();
  displayGames();
});
document.addEventListener('DOMContentLoaded', displayGames);
