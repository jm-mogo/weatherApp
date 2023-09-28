const apiKey = "8f29cb05b71c407b926131951231408";
//User interactions
const btn = document.querySelector("button");
const inputLocation = document.querySelector("#location-input");

//DOM manipulation
const city = document.querySelector(".weather-city");
const conditionH1 = document.querySelector(".weather-condition");
const tempH3 = document.querySelector(".weather-temp");
const description = document.querySelector(".weather-description");
const img = document.querySelector("img");

async function getWeather(location) {
    let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
    );

    let json = await response.json();
    console.log(json);
    console.log(json.current);

    /*city.textContent = json.location.name;
    conditionH1.textContent = json.current.condition.textContent;
    img.src = json.current.condition.icon;
    temp.textContent = json.current.temp_c;
    description.textContent = json.current.condition.text;*/
}

btn.addEventListener("click", () => {
    getWeather(inputLocation.value);
    inputLocation.value = "";
});

getWeather("Caracas");
