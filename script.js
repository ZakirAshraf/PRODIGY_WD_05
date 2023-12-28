function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const location = document.getElementById('location').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const cityElement = document.getElementById('city-name');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const iconElement = document.getElementById('weather-icon');
    const weatherInfoElement = document.getElementById('weather-info');

    cityElement.textContent = data.name;
    temperatureElement.textContent = `${Math.round(data.main.temp)} °C`;
    descriptionElement.textContent = data.weather[0].description;
    iconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherInfoElement.classList.remove('hidden');
}
