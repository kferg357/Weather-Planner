
var cityInput = document.querySelector("#city");
var cityForm = document.querySelector("#city-search-form");
var pastSearchButton = document.querySelector("#past-search-button");
var weatherContainer = document.querySelector("#cur-weather-container");
var citySearchInput = document.querySelector("city-input");
var forcastTitle = document.querySelector("#forecast");
var forecastContainer = document.querySelector("#fiveday-container");
var pastSearchButton = document.querySelector("#past-search-buttons");
var API_KEY = '10e1f68a65cde5b6f69c3c18e862cb60';
var forcastApiUrl = '4994e9dae0cfd4d7106550fa9a769e96';

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
    var lat = '36.0726';
    var lon = '-79.7920';
    
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    var forcastapiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=${city name},${state code},${country code}&limit=${limit}&appid=${API key}'

    console.log(apiUrl);
    console.log(forcastapiUrl);

    fetch(apiUrl)
        .then(function (data) {
            return data.json();
        })
        .then(function(data) {


            // List of all return data
            console.log(data);

            // List of Current Weather Info
            console.log(data.current)
           
            // List of Forcast Data
            console.log(data.daily)
            console.log(`UVI: ${data.current.uvi}`); 
            console.log(`TEMP: ${data.current.temp}`);
            console.log(`WIND_SPEED: ${data.current.wind_speed}`);
            console.log(`HUMIDITY: ${data.current.humidity}`);
            
            
            /*for (var i =5; i < data.length; i++) {
    
             }*/
         });

        //  fetch(forcastapiUrl)
        //  .then(function(data) {
        //      return data.json();
        //  })
      
    
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

// 4994e9dae0cfd4d7106550fa9a769e96
