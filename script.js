// https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=fa8d35944553b4fec3ec3403dd661080

const apikey = "fa8d35944553b4fec3ec3403dd661080";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector('.searchbox input'); //means input element inside searchbox
const searchbtn = document.querySelector('.searchbox button');

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`); //this will execute first and wait to fetch
    var data = await response.json(); //response of api will store in  data variable in json format
    console.log(data);
    //in console window we'll get temp,city name, etc. we've to display that on the app

    //fetching api data
    document.querySelector('.citynames').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.Wind').innerHTML = data.wind.speed + "km/hr";
    
}


searchbtn.addEventListener('click', ()=>{ //checkweather will have city info written input field
    checkweather(searchbox.value); 
})


