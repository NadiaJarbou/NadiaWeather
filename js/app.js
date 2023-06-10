let key = "9797ca36f38382a6a779265d7d410b93";
let url = "https://api.openweathermap.org/data/2.5/weather?lat=62.39092271058468&lon=17.305180310449508&APPID=" + `${key}`;

// bring Api date first time
updateFetch();

// this function will uppdate the Api date
function updateFetch() {
    fetch(url)
        .then(res => res.json())
        .then(data => {

            let city = document.getElementById("city");
            city.innerText = data.name;

            let degree = document.getElementById("deg");
            let celsius = (data.main.temp - 273.15);
            degree.innerText = Math.round(celsius);

            let icon = document.getElementById("icon");
            let iconcode = data.weather[0].icon;
            let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            icon.src = iconurl;

            let humidity = document.getElementById("humidity");
            humidity.innerText = data.main.humidity + " %";

            let speed = document.getElementById("speed");
            speed.innerText = data.wind.speed + " km/h";

            let pressure = document.getElementById("pressure");
            pressure.innerText = data.main.pressure + " pa";


            console.log(JSON.stringify(data, null, 2));
        });
}

// bring Api date every 30m
setInterval(updateFetch, 1800000);

// uppdate time every second
setInterval(getCurrentDate, 1000);

// datetime function
function getCurrentDate() {
    let day = document.getElementById("day");
    const date = new Date();
    const today = date.toLocaleDateString('en-us', { weekday: "long" });
    day.innerText = today;

    let datetime = document.getElementById("datetime");
    const dayNumber = date.getDate();
    const month = date.toLocaleDateString('en-us', { month: "long" });
    const time = date.toLocaleTimeString();
    datetime.innerText = dayNumber + ' ' + month + ' ' + time;
}
