const apiKey = "8f29cb05b71c407b926131951231408";
//User interactions
const btn = document.querySelector("button");
const inputLocation = document.querySelector("#location-input");

//DOM manipulation
const city = document.querySelector(".weather-city");
const condition = document.querySelector(".weather-condition");
const temp = document.querySelector(".weather-temp");
const description = document.querySelector(".weather-description");
const img = document.querySelector("img");

async function getWeather(location) {
    let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
    );

    let json = await response.json();
    displayWeather(json);
}

function displayWeather(weatherResponse) {
    city.textContent = weatherResponse.location.name;
    condition.textContent = weatherResponse.current.condition.textContent;
    description.textContent = weatherResponse.current.condition.text;
    temp.textContent = weatherResponse.current.temp_c + " °C";
    img.src = weatherResponse.current.condition.icon;
    console.log(weatherResponse);
}

getWeather("caracas");

btn.addEventListener("click", () => {
    getWeather(inputLocation.value);
    inputLocation.value = "";
});
