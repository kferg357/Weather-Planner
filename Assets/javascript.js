var cityInput = document.querySelector('#city');
var cityForm = document.querySelector('#city-search-form');
var pastSearchButton = document.querySelector('#past-search-button');
var weatherContainer = document.querySelector('#cur-weather-container');
var citySearchInput = document.querySelector('city-input');
var forcastTitle = document.querySelector('#forecast');
var forecastContainer = document.querySelector('#fiveday-container');
var pastSearchButton = document.querySelector('#past-search-buttons');
var API_KEY = '10e1f68a65cde5b6f69c3c18e862cb60';
var city_search = '';
var requestUrl = `https://openweathermap.org/api/geocoding-api#direct_name`;

cityForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // console.log("submitting data");
  city_search = cityInput.value;
  
  weatherSearch();
});
var savedSearch = function () {
  localStorage.getItem('city', JSON.stringify(cities));
  // localStorage.getItem()
};
function weatherSearch() {
  var cityName = $('#city').val();
  var coordinatesUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`;
  fetch(coordinatesUrl)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      // List of all return data
      console.log(data, 'coordinates');
      document.getElementById('city-input').textContent = data[0].name;
      // test lat and lon
      var lat = data[0].lat;
      var lon = data[0].lon;
      console.log(lat, 'lat');
      console.log(lon, 'lon');
      var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      fetch(apiUrl)
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          // List of all return data
          console.log(data.timezone);
          // List of Current Weather Info
          // console.log(data.current)
          console.log(data.daily);
          console.log(`UVI: ${data.current.uvi}`);
          console.log(`TEMP: ${data.current.temp}`);
          console.log(`WIND_SPEED: ${data.current.wind_speed}`);
          console.log(`HUMIDITY: ${data.current.humidity}`);
          var curWeatherContainer = $('#content');
          console.log('curWeatherContainer:', curWeatherContainer);
          curWeatherContainer.append(`<content>Temperature ${data.current.temp}</content>`); 
          curWeatherContainer.append(`<content>UV Index ${data.current.uvi}</content>`);
          curWeatherContainer.append(`<content>Humidity ${data.current.humidity}</content>`);
          curWeatherContainer.append(`<content>Wind Speed ${data.current.wind_speed}</content>`);

        
          
          
        //   fivedayForcasst.append(`h2>Temperature ${data.ftemp}</h2>`);
          
        //    var = forcastContanter = $('#fiveday-container');
          
    function k2f(K) {
        return Math.floor((K - 273.15) *1.8 +32);
    }

          for (var i = 0; i < 5; i++) {
              console.log(data.daily[i].temp.day);
              console.log(data.daily[i].wind_speed)
              console.log(data.daily[i].uvi)
              console.log(data.daily[i].humidity)
               var temp = `<div class= "c" >
            <p>Temperature ${data.daily[i].temp.day}</p>
            <p>UV Index ${data.daily[i].uvi}</p>
            <p>Wind Speed ${data.daily[i].wind_speed}</p>
            <p>Humidtiy ${data.daily[i].humidity}</p>
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
localStorage.setItem(id, userData);
    
    let temp = localStorage.getItem(id);
    console.log(temp, 'TEMP');
    console.log(localStorage, 'localStorage')

  }



console.log('city');
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