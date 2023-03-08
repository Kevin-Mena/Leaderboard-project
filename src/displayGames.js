/* eslint-disable  import/prefer-default-export */
const addGame = async (name, score) => {
  const body = document.querySelector('#tbody');
  const row = document.createElement('tr');
  row.innerHTML += `
   <tr>
        <td>Name: ${name}</span></td>
        <td>Score: ${score}</span></td>
     </tr>
  `;
  body.appendChild(row);
};
export const displayGames = async () => {
  const table = document.querySelector('#tbody');
  const fetchData = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nfRp4PrqV9I3ttAeAgHs/scores/',
  );
  const data = await fetchData.json();
  const responseData = data.result;
  table.innerHTML = '';
  responseData.forEach((value) => {
    addGame(value.user, value.score);
  });
};
