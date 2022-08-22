function onGeoOk (position) {
    alert("know yout location");
    const lat = position.coords.latitude;
    const lon = position.coords.longitude
    const APIKEY = "aec4a2eee1b37fa6246062243087d44b";
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather");
        const city = document.querySelector("#city");
        const temp = document.querySelector("#temp");
        weather.innerText = `${data.weather[0].main}`;
        city.innerText = `${data.name}`;
        temp.innerText = `${Math.round(data.main.temp)}°C`;

        switch(`${data.weather[0].main}`){
            case "Clouds" : weather.innerText = "🌥️"; break;
            case "Rain" : weather.innerText = "🌧️"; break;
            case "Snow" : weather.innerText = "🌨️"; break;
            case "Sunny" : weather.innerText = "🌞"; break;
        }   
        
    });
}


function onGeoError () {
    alert("Cant't find you. no wheather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);