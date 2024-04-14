function searchWeather() {
    const lat = 52.2297; // Latitude of the location
    const lon = 21.0122; // Longitude of the location
    const exclude = 'current,minutely,hourly'; // Exclude current, minutely, and hourly data
    const apiKey = '0c3b0c1ab5186281fff62d3ab67fd066'; // Replace with your actual API key

    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data.');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';

    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');

    const cityName = document.createElement('p');
    cityName.textContent = 'Location: ' + data.timezone;

    const temperature = document.createElement('p');
    temperature.textContent = 'Temperature: ' + data.data[0].temp + ' K';

    const humidity = document.createElement('p');
    humidity.textContent = 'Humidity: ' + data.data[0].humidity + '%';

    const sunrise = document.createElement('p');
    sunrise.textContent = 'Sunrise: ' + new Date(data.data[0].sunrise * 1000).toLocaleTimeString();

    const sunset = document.createElement('p');
    sunset.textContent = 'Sunset: ' + new Date(data.data[0].sunset * 1000).toLocaleTimeString();

    weatherCard.appendChild(cityName);
    weatherCard.appendChild(temperature);
    weatherCard.appendChild(humidity);
    weatherCard.appendChild(sunrise);
    weatherCard.appendChild(sunset);

    weatherInfo.appendChild(weatherCard);
}
