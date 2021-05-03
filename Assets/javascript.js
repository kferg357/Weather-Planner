

var cityInput = document.querySelector("#city");
var cityForm = document.querySelector("#city-search-form");
var pastSearchButton = document.querySelector("#past-search-button");
var weatherContainer = document.querySelector("#cur-weather-container");
var citySearchInput = document.querySelector("city-input");
var forcastTitle = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("#fiveday-container");
var pastSearchButtonEl = document.querySelector("#past-search-buttons");


var savedSearch = function() {
    localStorage.setItem("city", JSON.stringify(cities));
};
console.log('cities')

 
// $(document).ready(function() {
//   $.ajax({
//     url: "api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}",
//     type: "GET",
//     success: function(result) {
//       console.log(result);
//     },
//     error: function(error) {
//       console.log(error);
//     }
//   });
// });
