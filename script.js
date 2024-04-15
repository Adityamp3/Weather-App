document.getElementById("cityInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fetchWeather();
  }
});
async function fetchWeather() {
  const apiKey = "ef1294eeef3865a952258ab01e350f8b";
  const city = document.getElementById("cityInput").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weatherInfo").innerHTML =
      "Error fetching weather data. Please try again.";
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
}
