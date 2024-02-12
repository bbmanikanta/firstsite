const apikey="773c773e6c5f289034ae082fb800fce6";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function CheckWeather(city){
    const response=await fetch(apiurl+city+`&APPID=${apikey}`);

        if(response.status==404)
        {
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }
        else
        {
        var data=await response.json();

        console.log(data);
        document.querySelector(".cityname").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".fa").innerHTML=Math.round(data.main.temp*33.8)+"°F"
        document.querySelector(".mintemp").innerHTML="min temp: "+Math.round(data.main.temp_min)+"celses";
        document.querySelector(".maxtemp").innerHTML="max temp: "+Math.round(data.main.temp_max)+"celses";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="./asset/images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="./asset/images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="./asset/images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="./asset/images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="./asset/images/mist.png";
        }    
      
         document.querySelector(".weather").style.display="block";
         document.querySelector(".error").style.display="none";
    }
}

searchBtn.addEventListener("click",()=>{
    CheckWeather(searchBox.value);
})
