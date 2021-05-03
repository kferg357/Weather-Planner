




var cityInput = document.querySelector("#city");
var cityForm = document.querySelector("#city-search-form");
var pastSearchButton = document.querySelector("#past-search-button");
var weatherContainer = document.querySelector("#cur-weather-container");
var citySearchInput = document.querySelector("city-input");
var forcastTitle = document.querySelector("#forecast");
var forecastContainer = document.querySelector("#fiveday-container");
var pastSearchButton = document.querySelector("#past-search-buttons");

var requestUrl = 'api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}';

fetch(requestUrl)
then(function (data) {
    return data.json();
     }
     .then(function (data) {
         for (var i =5; i < data.length; i++)
     }

var savedSearch = function () {
    localStorage.setItem("city", JSON.stringify(cities));
};
console.log('city')



fetch(requestUrl)
    .


// $(document).ready(function() {
//   $.ajax({
//     url: ,
//     type: "GET",
//     success: function(result) {
//       console.log(result);
//     },
//     error: function(error) {
//       console.log(error);
//     }
//   });
// });
