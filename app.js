function searchWeather() {
    const cityInput = document.getElementById('cityInput').value.trim();
    if (cityInput === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found.');
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
    cityName.textContent = data.name;

    const weatherIcon = document.createElement('img');
    weatherIcon.classList.add('weather-icon');
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    const weatherDescription = document.createElement('p');
    weatherDescription.textContent = data.weather[0].description;

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp} °C`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    weatherCard.appendChild(cityName);
    weatherCard.appendChild(weatherIcon);
    weatherCard.appendChild(weatherDescription);
    weatherCard.appendChild(temperature);
    weatherCard.appendChild(humidity);
    weatherCard.appendChild(windSpeed);

    weatherInfo.appendChild(weatherCard);
}
