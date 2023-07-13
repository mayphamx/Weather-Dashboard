var APIKey = "efb07af6a99214059c7511ed2b15133e";
// id -> variables
var searchButton = document.getElementById('search-button');
var listHistory = document.getElementById('history');
var currentDayList = document.getElementById("currentDay");
var day1List = document.getElementById("day1");
var day2List = document.getElementById("day2");
var day3List = document.getElementById("day3");
var day4List = document.getElementById("day4");
var day5List = document.getElementById("day5");

// click events to perform per function
searchButton.addEventListener('click', getCity);
searchButton.addEventListener('click', searchCity);

// local storage to save user inputs
var userSearches = [];

function searchCity() {wd
  var searchButton = document.getElementById('userInput').value;
  userSearches.push(searchButton);
  localStorage.setItem("SearchHistory", JSON.stringify(userSearches));
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

// fetch city API to save lat and lon data as variables
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
      // use lat and lon variables to call getcoor function to run
      getCoor(lat,lon);
  })
};

// use lat and lon as parameters to fetch base API
function getCoor(lat, lon) {
  var coordinateAPI = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=efb07af6a99214059c7511ed2b15133e";

  // currentDay
  // fetch base API
  fetch(coordinateAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // var -> get id=cityname (header 4)
      var place = document.getElementById("cityname");
      // var -> create as list element
      var temp = document.createElement("li");
      var humidity = document.createElement("li");
      var descr = document.createElement("li");
      var wind= document.createElement("li");
      var date = document.createElement("li");
      // var -> text content using dot method in data/consol
      place.textContent = (data.city.name);
      temp.textContent = "Temperature: "+(data.list[0].main.temp)+ "k";
      humidity.textContent = "Humidity: " +(data.list[0].main.humidity)+ "%";
      descr.textContent = "Forecast: "+(data.list[0].weather[0].description);
      wind.textContent = "Wind: "+(data.list[0].wind.speed)+ "mph";
      date.textContent = "Date: "+(data.list[0].dt_txt);
      
      // append to ID current day
      currentDayList.appendChild(place);
      currentDayList.appendChild(temp);
      currentDayList.appendChild(humidity);
      currentDayList.appendChild(descr);
      currentDayList.appendChild(wind);
      currentDayList.appendChild(date);
    })

    // Day 1 - tmmrw
  fetch(coordinateAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var temp1 = document.createElement("li");
      var humidity1 = document.createElement("li");
      var descr1 = document.createElement("li");
      var wind1= document.createElement("li");
      var date1 = document.createElement("li");
      
      temp1.textContent = "Temperature: "+(data.list[10].main.temp)+ "k";
      temp1.textContent = "Temperature: "+(data.list[10].main.temp)+ "k";
      humidity1.textContent = "Humidity: " +(data.list[10].main.humidity)+ "%";
      descr1.textContent = "Forecast: "+(data.list[10].weather[0].description);
      wind1.textContent = "Wind: "+(data.list[10].wind.speed)+ "mph";
      date1.textContent = "Date: "+(data.list[10].dt_txt);
      
      day1List.appendChild(date1);
      day1List.appendChild(temp1);
      day1List.appendChild(humidity1);
      day1List.appendChild(descr1);
      day1List.appendChild(wind1);
    })

    // Day 2
  fetch(coordinateAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var temp2 = document.createElement("li");
      var humidity2 = document.createElement("li");
      var descr2 = document.createElement("li");
      var wind2= document.createElement("li");
      var date2 = document.createElement("li");
      
      temp2.textContent = "Temperature: "+(data.list[10].main.temp)+ "k";
      temp2.textContent = "Temperature: "+(data.list[10].main.temp)+ "k";
      humidity2.textContent = "Humidity: " +(data.list[10].main.humidity)+ "%";
      descr2.textContent = "Forecast: "+(data.list[10].weather[0].description);
      wind2.textContent = "Wind: "+(data.list[10].wind.speed)+ "mph";
      date2.textContent = "Date: "+(data.list[10].dt_txt);
      
      day2List.appendChild(date2);
      day2List.appendChild(temp2);
      day2List.appendChild(humidity2);
      day2List.appendChild(descr2);
      day2List.appendChild(wind2);
      
    })
    // Day 3
  fetch(coordinateAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var temp3 = document.createElement("li");
      var humidity3 = document.createElement("li");
      var descr3 = document.createElement("li");
      var wind3= document.createElement("li");
      var date3 = document.createElement("li");
      
      temp3.textContent = "Temperature: "+(data.list[10].main.temp)+ "k";
      temp3.textContent = "Temperature: "+(data.list[10].main.temp)+ "k";
      humidity3.textContent = "Humidity: " +(data.list[10].main.humidity)+ "%";
      descr3.textContent = "Forecast: "+(data.list[10].weather[0].description);
      wind3.textContent = "Wind: "+(data.list[10].wind.speed)+ "mph";
      date3.textContent = "Date: "+(data.list[10].dt_txt);
      
      day3List.appendChild(date3);
      day3List.appendChild(temp3);
      day3List.appendChild(humidity3);
      day3List.appendChild(descr3);
      day3List.appendChild(wind3);
    })
    // Day 4
  fetch(coordinateAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var temp4 = document.createElement("li");
      var humidity4 = document.createElement("li");
      var descr4 = document.createElement("li");
      var wind4= document.createElement("li");
      var date4 = document.createElement("li");
      
      temp4.textContent = "Temperature: "+(data.list[10].main.temp)+ "k";
      temp4.textContent = "Temperature: "+(data.list[10].main.temp)+ "k";
      humidity4.textContent = "Humidity: " +(data.list[10].main.humidity)+ "%";
      descr4.textContent = "Forecast: "+(data.list[10].weather[0].description);
      wind4.textContent = "Wind: "+(data.list[10].wind.speed)+ "mph";
      date4.textContent = "Date: "+(data.list[10].dt_txt);
      
      day4List.appendChild(date4);
      day4List.appendChild(temp4);
      day4List.appendChild(humidity4);
      day4List.appendChild(descr4);
      day4List.appendChild(wind4);
    })
    // Day 5
  fetch(coordinateAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var temp5 = document.createElement("li");
      var humidity5 = document.createElement("li");
      var descr5 = document.createElement("li");
      var wind5= document.createElement("li");
      var date5 = document.createElement("li");
      
      temp5.textContent = "Temperature: "+(data.list[10].main.temp)+ "k";
      temp5.textContent = "Temperature: "+(data.list[10].main.temp)+ "k";
      humidity5.textContent = "Humidity: " +(data.list[10].main.humidity)+ "%";
      descr5.textContent = "Forecast: "+(data.list[10].weather[0].description);
      wind5.textContent = "Wind: "+(data.list[10].wind.speed)+ "mph";
      date5.textContent = "Date: "+(data.list[10].dt_txt);
      
      day5List.appendChild(date5);
      day5List.appendChild(temp5);
      day5List.appendChild(humidity5);
      day5List.appendChild(descr5);
      day5List.appendChild(wind5);
    })
}; 