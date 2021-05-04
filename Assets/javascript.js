




var cityInput = document.querySelector("#city");
var cityForm = document.querySelector("#city-search-form");
var pastSearchButton = document.querySelector("#past-search-button");
var weatherContainer = document.querySelector("#cur-weather-container");
var citySearchInput = document.querySelector("city-input");
var forcastTitle = document.querySelector("#forecast");
var forecastContainer = document.querySelector("#fiveday-container");
var pastSearchButton = document.querySelector("#past-search-buttons");
var API_KEY = '10e1f68a65cde5b6f69c3c18e862cb60';

var city_search = '';
// var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_search}&appid=${API_KEY}`;




cityForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // console.log("submitting data");
    
    city_search = cityInput.value;
    // console.log(city_search)

    weatherSearch()
});


function weatherSearch() {

    // test lat and lon
    var lat = '42.279';
    var lon = '-83.73';
    
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    console.log(apiUrl);

    fetch(apiUrl)
        .then(function (data) {
            return data.json();
        })
        .then(function(data) {

            // List of all return data
            console.log(data);

            // List of Current Weather Info
            console.log(data.current)
            console.log(`UVI: ${data.current.uvi}`);
            // List of Forcast Data
            console.log(data.daily)
            /*for (var i =5; i < data.length; i++) {
    
             }*/
         });
      
    
        }

var savedSearch = function () {
    localStorage.setItem("city", JSON.stringify(cities));
};
console.log('city')



// fetch(requestUrl)
    


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
