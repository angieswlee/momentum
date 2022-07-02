const API_KEY = "b10b217c9915b1cf194dab8acbe0163f";

function onGeoSuccess(location) {
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const temperture = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:nth-child(3)");
        weather.innerText = data.name;
        temperture.innerText = `${data.main.temp}℃`;
        city.innerText = data.weather[0].main
    });
}
function onGeoError() {
    alert("We can't find where you are now. Sorry for not telling you the weather.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);