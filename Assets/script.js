// var for the city name api URL with parameters q (for the city variable) and appid (for the api key)
// Possible example: var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// search button click event listener
    // fetch function to get API
    // We'll want to get the cities lat and log

    // function to save user search to local storage
    
    // dayjs to render weather by date/time accuracy on the page
    // api link for each city
    
    // var link lat and long
    
    // var cityURL 
    // user inputs city it goes into cityURL
    // from cityURL we'll take the lat and long using 


// function to render it to the page
// to retrieve geographical coordinates given a city name using 5-day forecast
// fetch request gets a list of all the repos for the node.js organization

// link ...
// paraments
// q = city
// appid = keyAPI

// var city

// linky here

// var cityURL 
// parament q and appid
// variable for city
// user inputs city it goes into cityURL
// from cityURL we'll take the lat and long using 
// collect city choice of user input

// api key & api by the lat and long coordinate & api by city input
// var coordinateAPI = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=efb07af6a99214059c7511ed2b15133e";
// var cityAPI = "https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid=efb07af6a99214059c7511ed2b15133e";

var APIKey = "efb07af6a99214059c7511ed2b15133e";
var searchButton = document.getElementById('search-button');
var listHistory = document.getElementById('history');

searchButton.addEventListener('click', getCity);
searchButton.addEventListener('click', searchCity);

var userSearches = [];

function searchCity() {
  var searchButton = document.getElementById('userInput').value;
  userSearches.push(searchButton);
  localStorage.setItem("SearchHistory", JSON.stringify(userSearches));
  console.log(userSearches);
}

function searchHistory() {
  var savedCities = JSON.parse(localStorage.getItem("SearchHistory"));
  if (savedCities !== null) {
    userSearches = savedCities;

    for (i = 0; i < savedCities.length; i++){
      var cityPlacement = savedCities[i];
      var li = document.createElement("button");
      li.textContent = cityPlacement;
      li.setAttribute("data-index", i);
      listHistory.appendChild(li);
    }
  }
}
searchHistory()

function getCity() {
  var inputCity = document.getElementById('userInput').value;
  //console.log(userInput);
  //console.log(searchButton.textContent);
  var cityAPI = "https://api.openweathermap.org/data/2.5/forecast?q="+inputCity+"&appid=efb07af6a99214059c7511ed2b15133e";

  
  fetch(cityAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Fetch Response \n-------------');
      var lat = (data.city.coord.lat);
      var lon =(data.city.coord.lon);
      console.log(lat,lon);
      getCoor(lat,lon);
  })
};

function getCoor(lat, lon) {
  var coordinateAPI = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=efb07af6a99214059c7511ed2b15133e";

  fetch(coordinateAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var temp = (data.list[0].main.temp);
      var humidity = (data.list[0].main.humidity);
      var humidity = (data.list[0].weather[0].description);
      var wind = (data.list[0].wind.speed);
      var date = (data.list[0].dt_txt);
      var place = (data.city.name);
      console.log(temp,humidity,wind,date,place);
      // 287.85 84 9.08 '2023-07-13 03:00:00'
      // var temp =(data.);
    })
}; 


// var city;

// function citydata() {
//   // fetch API
  // fetch(cityAPI, {
  //   lat:'data[i].lat';
  //   lon:'data[i].lon';
  // })
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log('Lat/Lon \n----------');
  //     console.log(data);
//     // retrieve lat and lon from json API response
      // for (var i = 0; i < data.length; i++) {
      //   console.log(data[i].lon);
      //   console.log(data[i].lat);
        // var lat = document.createElement('li');
        // var long = document.createElement('li');
        // lat.textContent = data[i].lat;
        // long.textContent = data[i].html_;
        // apiLat.append(lat);
        // apiLat.append(long);
        // console.log(lat.textContent);
        // console.log(long.textContent);
//     }
//   })
// };

// searchButton.addEventListener('click', getApi);