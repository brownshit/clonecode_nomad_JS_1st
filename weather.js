const API_KEY = "02ee16c0a4f235842c2d7be00ac44cf7";

function onGeoSucess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    //console.log("You live in", lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    fetch(url).then(response=> response.json()).then(data=>{
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');

        //then, weatherContainer will get weather from span
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });     //fetch mean promise... execute after some periods...

}
function onGeoFailed(){
    //if getCurrentPosition is not possible...
    alert("Cannot find you...");
}
navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoFailed);


