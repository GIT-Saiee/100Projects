// const Url = "http://api.weatherapi.com/v1/forecast.json?key=a98961f3ae134259843204751232208&days=1&aqi=no&alerts=no&q="
const apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=a98961f3ae134259843204751232208&days=2&aqi=no&alerts=no&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl+city);
    if (response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
    else{
    var data = await response.json();
    // console.log(data.forecast.forecastday[0].day);
    // console.log(data.forecast.forecastday[0].hour);
    
    todayArray = data.forecast.forecastday[0].hour;
    tomorrowArray = data.forecast.forecastday[1].hour;

    myArray = todayArray.concat(tomorrowArray);
    
    
    const hourlyE1 = document.querySelector(".hourly")

    //remove any existing temperatures
    while (hourlyE1.firstChild) {
        hourlyE1.removeChild(hourlyE1.firstChild);
    }
    
    let current_hour = new Date().getHours();
   
   for (let index = current_hour; index < current_hour+24; index++) {

        console.log("index="+index)
        const element = myArray[index];
        
        const temp_timeE1 = document.createElement("temp_time");
        h_time = element.time;
        
        const splitArray = h_time.split(" ")
        h_time= splitArray[1]; 
        h1_time = h_time.split(":");
        hour_time = Number(h1_time[0]);

        console.log("hour="+hour_time);
        centigrade = element.temp_c;
        fahrenheit = element.temp_f;
        temp = centigrade+"°C"+" "+fahrenheit+"°F"


        let ampm = "AM" ;
        
        if(hour_time >= 12){
            hour_time = hour_time -12;
            ampm = "PM";
        }

        const labelE1 = document.createElement("label");
        const labelE2 = document.createElement("label");
        labelE1.classList.add("grid-item");
        labelE2.classList.add("grid-item");
        labelE1.innerText = hour_time+ampm ;
        labelE2.innerText = temp ;
        temp_timeE1.appendChild(labelE1);
        temp_timeE1.appendChild(labelE2); 
        hourlyE1.appendChild(temp_timeE1) ;
    }
    document.querySelector(".city").innerText = data.location.name;
    document.querySelector(".temp").innerText = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerText = data.current.humidity + "%";
    document.querySelector(".wind").innerText = data.current.wind_kph + " km/hr ";
    if(data.current.condition.text.search("clear")){weatherIcon.src= "images/clear.png"}
    if(data.current.condition.text.search("cloud")!=-1){weatherIcon.src= "images/clouds.png"}
    if(data.current.condition.text.search("drizzle")!=-1){weatherIcon.src= "images/drizzle.png"}
    if(data.current.condition.text.search("humidity")!=-1){weatherIcon.src="images/humidity.png"}
    if(data.current.condition.text.search("Mist")!=-1){weatherIcon.src="images/mist.png"}
    if(data.current.condition.text.search("Rain")!=-1){weatherIcon.src="images/rain.png"}
    if(data.current.condition.text.search("Search")!=-1){weatherIcon.src="images/search.png"}
    if(data.current.condition.text.search("snow") != "-1" ){weatherIcon.src="images/snow.png"}
    if(data.current.condition.text.search("wind")!=-1){weatherIcon.src="images/wind.png"}

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display = "block";
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener(onkeyup,(e)=>{

    if (e.keyCode === 13)
    checkWeather(searchBox.value);
})
checkWeather(94582);