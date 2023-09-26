const apiKey = "8f29cb05b71c407b926131951231408";
const btn = document.querySelector("button");
const inputLocation = document.querySelector("#location-input");

const conditionH1 = document.querySelector("#condition");
const img = document.querySelector("img");
const tempH3 = document.querySelector("#temp");
const description = document.querySelector("#description");
const city = document.querySelector("#city");

async function getWeather(location) {
    let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
    );

    let json = await response.json();

    console.log(json);
    console.log(json.current);

    city.textContent = json.location.name;
    conditionH1.textContent = json.current.condition.textContent;
    img.src = json.current.condition.icon;
    temp.textContent = json.current.temp_c;
    description.textContent = json.current.condition.text;
}

btn.addEventListener("click", () => {
    getWeather(inputLocation.value);
    inputLocation.value = "";
});

getWeather("Caracas");
