const KEY = "43dcb46354a5207228cb08caa3d6895e"
const weather = document.querySelector(".weather h2:first-child");
const city = document.querySelector(".weather h2:last-child");

function onSuccess(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}  ${Math.floor(data.main.temp)-275}°C`;
    }); 
}

function onError() {
    alert("Can't find")
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);