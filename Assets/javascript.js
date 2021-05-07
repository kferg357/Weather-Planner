
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
 var requestUrl = `https://openweathermap.org/api/geocoding-api#direct_name`

//make an api call to lon and lat extensions
// pass the results to the weather search function
//then lon and lat variables should work


cityForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // console.log("submitting data");
    
    city_search = cityInput.value;
    // console.log(city_search)

    weatherSearch()
});


function weatherSearch() {
    // var coordinates =  `https://openweathermap.org/api/geocoding-api#direct_name`

    var coordinatesUrl = `https://api.openweathermap.org/geo/1.0/direct?q=boston&appid=${API_KEY}`
    
    fetch(coordinatesUrl)
    .then(function (data) {
        return data.json();
    })
    .then(function(data) {


        // List of all return data
        console.log(data, "coordinates")

     
    


    // test lat and lon
    var lat = data[0].lat;
    var lon = data[0].lon;
    console.log(lat,"lat")
    console.log(lon,"lon")
    
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    
 

    fetch(apiUrl)
        .then(function (data) {
            return data.json();
        })
        .then(function(data) {


            // List of all return data
            console.log(data);

            // List of Current Weather Info
            // console.log(data.current)
           
            // // List of Forcast Data
            // console.log(data.daily)
            // console.log(`UVI: ${data.current.uvi}`); 
            // console.log(`TEMP: ${data.current.temp}`);
            // console.log(`WIND_SPEED: ${data.current.wind_speed}`);
            // console.log(`HUMIDITY: ${data.current.humidity}`);
            
            
            /*for (var i =5; i < data.length; i++) {
    
             }*/
         });

        //  fetch(forcastapiUrl)
        //  .then(function(data) {
        //      return data.json();
        //  })
      
    });
        }

var savedSearch = function () {
    localStorage.setItem("city", JSON.stringify(cities));
    localStorage.getItem()
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
