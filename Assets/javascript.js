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
var citybuttons = $('#city-buttons');
var current_timestamp = new Date();
var today = moment().format('dddd, MMMM Do YYYY');
console.log(`today is ${today}`);
var tomorrow = moment().add(1, 'day');
console.log(`tomorrow is ${tomorrow}`);
getcities();
cityForm.addEventListener('submit', function (event) {
  event.preventDefault();
  city_search = cityInput.value;

  weatherSearch(cityInput.value);
});
var savedSearch = function (city_search) {
  var priorSearches = getcities() || [];
  priorSearches.push(city_search);
  localStorage.setItem('city_search', JSON.stringify(priorSearches));
};
function getcities() {
  var test = JSON.parse(localStorage.getItem('city_search'));
  console.log(test);
  return test;
}
function addSearchButton(cityName) {
  var nameDiv = $('<button>');
  nameDiv.append(cityName);
  nameDiv.addClass('namecities');
  citybuttons.append(nameDiv);

}
function addOldSearchButtonsOnPageLoad() {
  citiesSearched = getcities();
  if (citiesSearched.length > 0) {
    for (var i = 0; i < citiesSearched.length; i++) {
      addSearchButton(citiesSearched[i]);
    }
  }
}
$('body').on('click', 'button.namecities', function (e) {
  console.log(e.target.textContent)
  weatherSearch(e.target.textContent);
}
)
addOldSearchButtonsOnPageLoad();
function weatherSearch(cityName) {

  var coordinatesUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`;

  forecastContainer.innerHTML = '';
  pastSearchButton.innerHTML = '';
  addSearchButton(cityName);
  savedSearch(cityName);
  fetch(coordinatesUrl)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {

      var lat = data[0].lat;
      var lon = data[0].lon;

      var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
      fetch(apiUrl)
        .then(function (data) {
          // console.log(data.json);
          return data.json();
        })
        .then(function (weatherdata) {
          $('#cur-forecast').empty();
          var curWeatherContainer = $('#cur-forecast');
          var weatherDiv = $('<div>');
          weatherDiv.addClass('weatherstats');
          weatherDiv.append(`<h3>${data[0].name}</h3>`);
          weatherDiv.append(`<h3>${today}</h3>`);
          console.log('curWeatherContainer:', curWeatherContainer);
          weatherDiv.append(`<content>Temperature ${weatherdata.current.temp}\u00B0 F </content>`);
          weatherDiv.append(`<content>UV Index ${weatherdata.current.uvi}</content>`);
          weatherDiv.append(`<content>Humidity ${weatherdata.current.humidity} \% </content>`);
          weatherDiv.append(`<content>Wind Speed ${weatherdata.current.wind_speed} mhp</content>`);
          weatherDiv.append(`<img src = "http://openweathermap.org/img/w/${weatherdata.current.weather[0].icon}.png"></img>`)


          curWeatherContainer.append(weatherDiv);



          for (var i = 0; i < 5; i++) {

            var waetherIcon = document.createElement("img");
            waetherIcon.setAttribute("src", "http://openweathermap.org/img/w/" + weatherdata.daily[i].weather[0].icon + ".png");
            waetherIcon.setAttribute("alt", weatherdata.daily[i].weather[0].description);





            var temp = `<div class= "c" >
            <p>Date ${moment()
                .add(i + 1, 'day')
                .format('dddd, MMMM Do')}</p>

                <img src ="http://openweathermap.org/img/w/${weatherdata.daily[i].weather[0].icon}.png"></img>

            <p>Temperature ${weatherdata.daily[i].temp.day}\u00B0 F</p>
            <p>UV Index ${weatherdata.daily[i].uvi}</p>
            <p>Wind Speed ${weatherdata.daily[i].wind_speed} mhp</p>
            <p>Humidtiy ${weatherdata.daily[i].humidity}\%</p>
            </div>`;
            var forecastContainer = $('#fiveday-container');
            forecastContainer.append(temp);

          }
        });

    });

}