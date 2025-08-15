const apikey = "fa8d35944553b4fec3ec3403dd661080";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; //results in metric units (Celsius)
const searchbox = document.querySelector('.searchbox input'); //<input> element inside the element with class .searchbox
const searchbtn = document.querySelector('.searchbox button');
const weathericon = document.querySelector('.weather-icon'); //src can be updated dynamically using API

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`); //builds the full URL
    var data = await response.json(); //response of api will store in store the parsed result converting it from JSON text into a JavaScript object (data)
    console.log(data); //in console window we'll get temp,city name, etc in JSON format. & with the help of that we've to display that on the app

    if(response.status == "404"){ //"404" HTTP status from API which tells city not found
        document.querySelector('.errormsg').style.display ="block";
        document.querySelector('.weather').style.display ="none";
    }

    else if (searchbox.value === ""){
        alert("Enter Your City Name")
    }

    else{  //else if ladder -This runs when there’s no error and the input is not empty

    //fetching API data
    document.querySelector('.citynames').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.Wind').innerHTML = data.wind.speed + "km/hr";

    // Weather icon switching
    if(data.weather[0].main === "Clouds"){  //index 0 inside key-value pair of weather which has main inside it
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
    
    document.querySelector('.errormsg').style.display ="none";
    document.querySelector('.weather').style.display ="block";
    
    }

}

// Button click
searchbtn.addEventListener('click', ()=>{ //Reads the value from the input box Passes it to checkweather() to fetch weather data
    checkweather(searchbox.value); 
})

// Enter key
searchbox.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        //e.preventDefault();
        checkweather(searchbox.value);
    }  
})