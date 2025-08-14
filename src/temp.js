function refreshWeather(response){
  let temperatureElement = document.querySelector("#tempVal");  
  temperatureElement.innerHTML = response.data.temperature.current;

  let cityElement = document.querySelector("#current");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  
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