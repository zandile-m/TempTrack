function refreshWeather(response){
  let temperatureElement = document.querySelector("#tempVal");  
  temperatureElement.innerHTML = response.data.temperature.current;
  let cityElement = document.querySelector("#current");
    let descriptionElement = document.querySelector("#condText");
  let humidityElement = document.querySelector("#humVal");
  let windElement = document.querySelector("#windVal");
    let timeElement = document.querySelector("#time");
  let  date= new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;

  timeElement.innerHTML = formatDate(date);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed} km/h`;
  
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  
}

function formatDate(date){
 
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 let day = days[date.getDay()];

 if (minutes < 10){
  minutes = `0${minutes}`;
 }

 return`${day} ${hours}:${minutes}`;

}



function searchCity(city){
let apiKey = "944a6721ao9b6c1c3a743389fb2tdec0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
console.log(apiUrl);
}



function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#cityInput");
    
    searchCity(searchInput.value);
}



let searchIdElement = document.querySelector("#search-form");
searchIdElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris")