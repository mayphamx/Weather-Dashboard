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

var userSearches = [];

//search history button function - fetch city api
listHistory.addEventListener("click", function(event){

  var element = event.target;
  var buttonId =  element.id;

  var userInput = document.getElementById(buttonId).innerText; 
  var cityAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=99ae5f456c92f7cf24d805292935704d";

  fetch(cityAPI)
  .then(function (response){
    return response.json();
  })
  .then(function (data){
    console.log("This is the fetch response");
    var lat = (data.city.coord.lat);
    var lon = (data.city.coord.lon);
    // call get coordinate function with parameters lat and lon
    getCoordinates(lon, lat);
  })
})

function getCoordinates(lon, lat)
{
  // city api based on lat and lon variables
  var cityAPI = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&appid=efb07af6a99214059c7511ed2b15133e";

  fetch(cityAPI)
  .then(function (response) {
      return response.json();
  })
  .then(function (data){
    console.log(data);
      // id-> var
      var place = document.getElementById("cityname");
      var temp = document.createElement("li");
      var humidity = document.createElement("li");
      var wind= document.createElement("li");
      var date = document.createElement("li");
      var descr = document.createElement("li");
      
      // icon determined by data
      if (data.list[0].weather[0].main == "Clouds") {
        descr.textContent = "☁️";
      }
      else {
        descr.textContent = "☀️";
      }

      // display on site as text
      place.textContent = (data.city.name);
      temp.textContent = "Temperature: "+(data.list[0].main.temp)+ "F";
      humidity.textContent = "Humidity: " +(data.list[0].main.humidity)+ "%";
      wind.textContent = "Wind: "+(data.list[0].wind.speed)+ "mph";
      date.textContent = "Date: "+(data.list[0].dt_txt);
      
      // clear if string is not empty
      if(currentDayList !== "")
      {
        currentDayList.innerHTML = "";
      }
        // append child element
        currentDayList.appendChild(place);
        currentDayList.appendChild(temp);
        currentDayList.appendChild(humidity);
        currentDayList.appendChild(descr);
        currentDayList.appendChild(wind);
        currentDayList.appendChild(date);

        // Day 1 
        var temp1 = document.createElement("li");
        var humidity1 = document.createElement("li");
        var descr1 = document.createElement("li");
        var wind1= document.createElement("li");
        var date1 = document.createElement("li");
        
        if (data.list[8].weather[0].main == "Clouds") {
          descr1.textContent = "☁️";
        }
        else {
          descr1.textContent = "☀️";
        }

        temp1.textContent = "Temperature: "+(data.list[8].main.temp)+ "F";
        humidity1.textContent = "Humidity: " +(data.list[8].main.humidity)+ "%";
        wind1.textContent = "Wind: "+(data.list[8].wind.speed)+ "mph";
        date1.textContent = "Date: "+(data.list[8].dt_txt);

        if(day1List !== "")
        {
          day1List.innerHTML = "";
        }
        
        day1List.appendChild(date1);
        day1List.appendChild(temp1);
        day1List.appendChild(humidity1);
        day1List.appendChild(descr1);
        day1List.appendChild(wind1);

        //DAY 2
        var temp2 = document.createElement("li");
        var humidity2 = document.createElement("li");
        var descr2 = document.createElement("li");
        var wind2= document.createElement("li");
        var date2 = document.createElement("li");
        
        if (data.list[16].weather[0].main == "Clouds") {
          descr2.textContent = "☁️";
        }
        else {
          descr2.textContent = "☀️";
        }
        temp2.textContent = "Temperature: "+(data.list[16].main.temp)+ "F";
        humidity2.textContent = "Humidity: " +(data.list[16].main.humidity)+ "%";
        wind2.textContent = "Wind: "+(data.list[16].wind.speed)+ "mph";
        date2.textContent = "Date: "+(data.list[16].dt_txt);

        if(day2List !== "")
        {
          day2List.innerHTML = "";
        }
        
        day2List.appendChild(date2);
        day2List.appendChild(temp2);
        day2List.appendChild(humidity2);
        day2List.appendChild(descr2);
        day2List.appendChild(wind2);

        //DAY 3
        var temp3 = document.createElement("li");
        var humidity3 = document.createElement("li");
        var descr3 = document.createElement("li");
        var wind3= document.createElement("li");
        var date3 = document.createElement("li");
        
        if (data.list[24].weather[0].main == "Clouds") {
          descr3.textContent = "☁️";
        }
        else {
          descr3.textContent = "☀️";
        }

        temp3.textContent = "Temperature: "+(data.list[24].main.temp)+ "F";
        humidity3.textContent = "Humidity: " +(data.list[24].main.humidity)+ "%";
        wind3.textContent = "Wind: "+(data.list[24].wind.speed)+ "mph";
        date3.textContent = "Date: "+(data.list[24].dt_txt);

        if(day3List !== "")
        {
          day3List.innerHTML = "";
        }
        
        day3List.appendChild(date3);
        day3List.appendChild(temp3);
        day3List.appendChild(humidity3);
        day3List.appendChild(descr3);
        day3List.appendChild(wind3);

        //DAY 4
        var temp4 = document.createElement("li");
        var humidity4 = document.createElement("li");
        var descr4 = document.createElement("li");
        var wind4= document.createElement("li");
        var date4 = document.createElement("li");
        
        if (data.list[32].weather[0].main == "Clouds") {
          descr4.textContent = "☁️";
        }
        else {
          descr4.textContent = "☀️";
        }

        temp4.textContent = "Temperature: "+(data.list[32].main.temp)+ "F";
        humidity4.textContent = "Humidity: " +(data.list[32].main.humidity)+ "%";
        wind4.textContent = "Wind: "+(data.list[32].wind.speed)+ "mph";
        date4.textContent = "Date: "+(data.list[32].dt_txt);

        if(day4List !== "")
        {
          day4List.innerHTML = "";
        }
        
        day4List.appendChild(date4);
        day4List.appendChild(temp4);
        day4List.appendChild(humidity4);
        day4List.appendChild(descr4);
        day4List.appendChild(wind4);

        //DAY 5

        var temp5 = document.createElement("li");
        var humidity5 = document.createElement("li");
        var descr5 = document.createElement("li");
        var wind5= document.createElement("li");
        var date5 = document.createElement("li");
        
        if (data.list[39].weather[0].main == "Clouds") {
          descr5.textContent = "☁️";
        }
        else {
          descr5.textContent = "☀️";
        }

        temp5.textContent = "Temperature: "+(data.list[39].main.temp)+ "F";
        humidity5.textContent = "Humidity: " +(data.list[39].main.humidity)+ "%";
        wind5.textContent = "Wind: "+(data.list[39].wind.speed)+ "mph";
        date5.textContent = "Date: "+(data.list[39].dt_txt);

        if(day5List !== "")
        {
          day5List.innerHTML = "";
        }
        
        day5List.appendChild(date5);
        day5List.appendChild(temp5);
        day5List.appendChild(humidity5);
        day5List.appendChild(descr5);
        day5List.appendChild(wind5);

  })
}

//search function - fetch city api
function searchCity() {
  var searchButton = document.getElementById('userInput').value;
  userSearches.push(searchButton);
  localStorage.setItem("SearchHistory", JSON.stringify(userSearches));
}

// save user input in local storage to display on page
function searchHistory() {
  var savedCities = JSON.parse(localStorage.getItem("SearchHistory"));
  if (savedCities !== null) {
    userSearches = savedCities;

    for (i = 0; i < savedCities.length; i++){
      var cityPlacement = savedCities[i];
      var li = document.createElement("button");
      li.textContent = cityPlacement;
      li.setAttribute("id", i);
      listHistory.appendChild(li);
    }
  }
}
searchHistory()

// fetch city API to save lat and lon data as variables
function getCity() {
  var inputCity = document.getElementById('userInput').value;
  var coordinateAPI = "https://api.openweathermap.org/data/2.5/forecast?q="+inputCity+"&appid=efb07af6a99214059c7511ed2b15133e";

  
  fetch(coordinateAPI)
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

// use lat and lon as parameters to fetch base API
function getCoor(lat, lon) {
  var coordinateAPI = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&appid=efb07af6a99214059c7511ed2b15133e";

  // currentDay
  // fetch base API
  fetch(coordinateAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // var -> get id=cityname (header)
      var place = document.getElementById("cityname");
      // var -> create as list element
      var temp = document.createElement("li");
      var humidity = document.createElement("li");
      var descr = document.createElement("li");
      var wind= document.createElement("li");
      var date = document.createElement("li");

      if (data.list[0].weather[0].main == "Clouds") {
        descr.textContent = "☁️";
      }
      else {
        descr.textContent = "☀️";
      }

      // var -> text content using dot method in data/consol
      place.textContent = (data.city.name);
      temp.textContent = "Temperature: "+(data.list[0].main.temp)+ "F";
      humidity.textContent = "Humidity: " +(data.list[0].main.humidity)+ "%";
      wind.textContent = "Wind: "+(data.list[0].wind.speed)+ "mph";
      date.textContent = "Date: "+(data.list[0].dt_txt);
      
      if(currentDayList !== "")
        {
          currentDayList.innerHTML = "";
        }

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
      
      if (data.list[8].weather[0].main == "Clouds") {
        descr1.textContent = "☁️";
      }
      else {
        descr1.textContent = "☀️";
      }

      temp1.textContent = "Temperature: "+(data.list[8].main.temp)+ "F";
      humidity1.textContent = "Humidity: " +(data.list[8].main.humidity)+ "%";
      wind1.textContent = "Wind: "+(data.list[8].wind.speed)+ "mph";
      date1.textContent = "Date: "+(data.list[8].dt_txt);
      
      if(day1List !== "")
        {
          day1List.innerHTML = "";
        }

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
      
      if (data.list[16].weather[0].main == "Clouds") {
        descr2.textContent = "☁️";
      }
      else {
        descr2.textContent = "☀️";
      }

      temp2.textContent = "Temperature: "+(data.list[16].main.temp)+ "F";
      humidity2.textContent = "Humidity: " +(data.list[16].main.humidity)+ "%";
      wind2.textContent = "Wind: "+(data.list[16].wind.speed)+ "mph";
      date2.textContent = "Date: "+(data.list[16].dt_txt);
      
      if(day2List !== "")
        {
          day2List.innerHTML = "";
        }

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
      
      if (data.list[24].weather[0].main == "Clouds") {
        descr3.textContent = "☁️";
      }
      else {
        descr3.textContent = "☀️";
      }

      temp3.textContent = "Temperature: "+(data.list[24].main.temp)+ "F";
      humidity3.textContent = "Humidity: " +(data.list[24].main.humidity)+ "%";
      wind3.textContent = "Wind: "+(data.list[24].wind.speed)+ "mph";
      date3.textContent = "Date: "+(data.list[24].dt_txt);
      
      if(day3List !== "")
        {
          day3List.innerHTML = "";
        }

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
      
      if (data.list[32].weather[0].main == "Clouds") {
        descr4.textContent = "☁️";
      }
      else {
        descr4.textContent = "☀️";
      }

      temp4.textContent = "Temperature: "+(data.list[32].main.temp)+ "F";
      humidity4.textContent = "Humidity: " +(data.list[32].main.humidity)+ "%";
      wind4.textContent = "Wind: "+(data.list[32].wind.speed)+ "mph";
      date4.textContent = "Date: "+(data.list[32].dt_txt);
      
      if(day4List !== "")
        {
          day4List.innerHTML = "";
        }

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

      if (data.list[39].weather[0].main == "Clouds") {
        descr5.textContent = "☁️";
      }
      else {
        descr5.textContent = "☀️";
      }

      temp5.textContent = "Temperature: "+(data.list[39].main.temp)+ "F";
      humidity5.textContent = "Humidity: " +(data.list[39].main.humidity)+ "%";
      wind5.textContent = "Wind: "+(data.list[39].wind.speed)+ "mph";
      date5.textContent = "Date: "+(data.list[39].dt_txt);
      
      if(day5List !== "")
        {
          day5List.innerHTML = "";
        }

      day5List.appendChild(date5);
      day5List.appendChild(temp5);
      day5List.appendChild(humidity5);
      day5List.appendChild(descr5);
      day5List.appendChild(wind5);
    })
}






