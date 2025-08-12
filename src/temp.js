function handleSearchSubmit(event){
    event.preventDefault();
    let searchCity = document.querySelector("#cityInput");
    let cityElement = document.querySelector("#current");
    cityElement.innerHTML = searchCity.value;
}



let searchIdElement = document.querySelector("#search-form");
searchIdElement.addEventListener("submit", handleSearchSubmit);
