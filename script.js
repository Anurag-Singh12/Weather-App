const apikey = "fa8d35944553b4fec3ec3403dd661080";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector('.searchbox input'); //means input element inside searchbox
const searchbtn = document.querySelector('.searchbox button');
const weathericon = document.querySelector('.weather-icon');

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`); //this will execute first and wait to fetch
    var data = await response.json(); //response of api will store in  data variable in json format
    //console.log(data); //in console window we'll get temp,city name, etc. & with the help of that we've to display that on the app

    if(response.status == "404"){ //"404" code is for city not found in api
        document.querySelector('.errormsg').style.display ="block";
        document.querySelector('.weather').style.display ="None";
    }

    else if (searchbox.value === ""){
        alert("Enter Your City Name")
    }

    else{  //else if ladder

    //fetching api data
    document.querySelector('.citynames').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.Wind').innerHTML = data.wind.speed + "km/hr";
    
    if(data.weather[0].main === "Clouds"){  //index 0 gives the weather using api
        weathericon.src ="images/clouds.png";
        // console.log('oh its a nice weather');
        // document.querySelector('.citynames').innerHTML = data.name + "oh its a nice weather";
    }
    else if(data.weather[0].main === "Rain"){
        weathericon.src = "images/rain.png";
    }
    else if(data.weather[0].main === "Clear"){
        weathericon.src = "images/clear.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weathericon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
        weathericon.src = "images/mist.png";
    }
    
    document.querySelector('.weather').style.display ="block";
    document.querySelector('.errormsg').style.display ="none";

    }

}

searchbtn.addEventListener('click', ()=>{ //checkweather will have city info written input field
    checkweather(searchbox.value); 
})

searchbox.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
        checkweather(searchbox.value);
    }
    
})

