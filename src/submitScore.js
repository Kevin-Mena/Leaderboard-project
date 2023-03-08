/* eslint-disable  import/prefer-default-export */
export const submitScore = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nfRp4PrqV9I3ttAeAgHs/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: `${document.querySelector('#name').value}`,
        score: `${document.querySelector('#score').value}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const result = await response.json();
  console.log(result);
};
