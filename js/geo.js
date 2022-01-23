const geo = document.querySelector(".geo-zone");
const API_KEY = "ec6e1d4d8199962b70372d86119722c9";
function allowed(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const city = geo.querySelector("span:first-child")
        const weather = geo.querySelector("span:nth-child(2)");
        const temp = geo.querySelector("span:last-child");
        city.setAttribute("class", "fab fa-font-awesome-flag");
        city.innerText = " " +data.name + "\n";
        weather.setAttribute("class", "fas fa-cloud");
        weather.innerText = ` ${data.weather[0].main}`;
        temp.setAttribute("class", "fas fa-thermometer-half");
        temp.innerText = ` ${data.main.temp}C`;
        });
}

function rejected(){
    geo.innerText = "No information";
}

navigator.geolocation.getCurrentPosition(allowed, rejected);