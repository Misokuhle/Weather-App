function getWeather() {
    const locationInput = document.getElementById("location");
    const location = locationInput.value;
    const weatherInfo = document.getElementById("weatherInfo");
    //const loadingIndicator = document.getElementById("loadingIndicator");

    //loadingIndicator.style.display = "block";
    weatherInfo.innerHTML = '<p>Loading...</p>';

    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid='YOUR_API_KEY'&units=metric`;
    
    locationInput.style.borderColor = '';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid location. Please try again.');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;


        document.querySelector("button").classList.remove("wrong-input");

        })
        .catch(error => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<p class="error">${error.message}</p>`;

            //Set the border color to red if there's an error
            locationInput.style.borderColor = 'red';
           
        document.querySelector("button").classList.add("wrong-input");
        //loadingIndicator.style.display = "none";

        });

}