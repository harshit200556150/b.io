const jokeContainer = document.getElementById('jokeContainer');
const getJokeButton = document.getElementById('getJoke');

const apiUrl = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
const apiKey = 'https://api.chucknorris.io/jokes/random';

getJokeButton.addEventListener('click', async () => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey,
        'accept': 'application/json'
      }
    });

    const joke = response.data.value;
    jokeContainer.textContent = joke;
  } catch (error) {
    console.error(error);
    jokeContainer.textContent = 'Error fetching joke.';
  }
});