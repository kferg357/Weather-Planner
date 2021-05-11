var cityInput = document.querySelector('#city');
var cityForm = document.querySelector('#city-search-form');
var weatherContainer = document.querySelector('#cur-weather-container');
var citySearchInput = document.querySelector('city-input');
var forcastTitle = document.querySelector('#forecast');
var forecastContainer = document.querySelector('#fiveday-container');
var pastSearchButton = document.querySelector('#past-search-buttons');
var API_KEY = '10e1f68a65cde5b6f69c3c18e862cb60';
var city_search = '';
var requestUrl = `https://openweathermap.org/api/geocoding-api#direct_name`;
var citybuttons = $("#city-buttons");
var current_timestamp = new Date();
var today = moment().format("dddd, MMMM Do YYYY");
console.log(`today is ${today}`);
var tomorrow = moment().add(1, 'day');
console.log(`tomorrow is ${tomorrow}`);
getcities()



cityForm.addEventListener('submit', function (event) {
  event.preventDefault();
  city_search = cityInput.value;
  /*
  cityForm.addEventListener('submit', function (event) {
     event.preventDefault();
     city_search = cityInput.value;
     console.log("city_search now storing: ", city_search)
   
     weatherSearch();
   });
   */



  weatherSearch();
});



var savedSearch = function (city_search) {
 var nameof = localStorage.setItem (city_search,JSON.stringify("Greensboro"))
  console.log(nameof)
}


function getcities() { 
 var test = JSON.parse (localStorage.getItem('city'))
 console.log(test)
 }

function weatherSearch() {
  var cityName = $('#city').val();
  var coordinatesUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`;


  // Clear out any old data on the DOM
  // //
  forecastContainer.innerHTML = ""
  pastSearchButton.innerHTML = ""
  
  var nameDiv = $("<button>");
  nameDiv.append(cityName);
  nameDiv.addClass("namecities");
  citybuttons.append(nameDiv);


  fetch(coordinatesUrl)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      // List of all return data
      console.log(data, 'coordinates');
      // document.getElementById('city-input').textContent = data[0].name;
      // test lat and lon
      var lat = data[0].lat;
      var lon = data[0].lon;
      
      console.log(lat, 'lat');
      console.log(lon, 'lon');
      var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
      fetch(apiUrl)
        .then(function (data) {
          console.log(data.json)
          

          return data.json();
        })
        .then(function (weatherdata) {
          
           
          $('#cur-forecast').empty()
          var curWeatherContainer = $('#cur-forecast');
          var weatherDiv = $("<div>");
          weatherDiv.addClass("weatherstats");
          weatherDiv.append(`<h3>${data[0].name}</h3>`);
          weatherDiv.append(`<h3>${today}</h3>`);                  
          
          console.log('curWeatherContainer:', curWeatherContainer);
          weatherDiv.append(`<content>Temperature ${weatherdata.current.temp}</content>`);
          weatherDiv.append(`<content>UV Index ${weatherdata.current.uvi}</content>`);
          weatherDiv.append(`<content>Humidity ${weatherdata.current.humidity}</content>`);
          weatherDiv.append(`<content>Wind Speed ${weatherdata.current.wind_speed}</content>`);
          curWeatherContainer.append(weatherDiv);


          



          //   fivedayForcasst.append(`h2>Temperature ${data.ftemp}</h2>`);
          // function k2f(K) {
          //   return Math.floor((K - 273.15) * 1.8 + 32);
          // }

          for (var i = 0; i < 5; i++) {
            console.log(moment().add(i + 1, 'day').format('dddd, MMMM Do'))
            console.log(weatherdata.daily[i].temp.day);
            console.log(weatherdata.daily[i].wind_speed)
            console.log(weatherdata.daily[i].uvi)
            console.log(weatherdata.daily[i].humidity)
            var temp = `<div class= "c" >
            <p>Date ${moment().add(i + 1, 'day').format('dddd, MMMM Do')}</p>
            <p>Temperature ${weatherdata.daily[i].temp.day}</p>
            <p>UV Index ${weatherdata.daily[i].uvi}</p>
            <p>Wind Speed ${weatherdata.daily[i].wind_speed}</p>
            <p>Humidtiy ${weatherdata.daily[i].humidity}</p>
            </div>`

            var forecastContainer = $("#fiveday-container");
            forecastContainer.append(temp)
            //  forecastContainer.append(`<p>Temperature ${data.daily[i].temp.day}</p>`);
            //  forecastContainer.append(`<p>UV Index ${data.daily[i].wind_speed}</p>`);
            //  forecastContainer.append(`<p>Wind Speed ${data.daily[i].uvi}</py>`);
            //  forecastContainer.append(`<p>Humidity ${data.daily[i].humidity}</p>`);





          }
        });
      //  fetch(forcastapiUrl)
      //  .then(function(data) {
      //      return data.json();
      //  })
    });

  // this line 
  // localStorage.setItem();

  //     let temp = localStorage.getItem(id);
  //     console.log(temp, 'TEMP');
  //     console.log(localStorage, 'localStorage')

}




