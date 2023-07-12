function searchdata() {
    searchplace = searchPlace.value;
    console.log(searchplace);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchplace}&appid=68b0b5f0db57621f8d1e51cddcf907aa&units=metric`)
        .then(res => res.json())
        .then(data => weatherData(data))
        .catch(err => alert('Failed to display weather data'))
}
function weatherData(data) {
    locationName = data.name;
    countryName = data.sys.country;
    temperature = data.main.temp;
    feelsLike = data.main.feels_like;
    main = data.weather[0].main;
    description = data.weather[0].description;
    wind = data.wind.speed;
    humidity = data.main.humidity;
    pressure = data.main.pressure;
    c.innerHTML = `
  
  Pressure: ${pressure}hPa<br>
  Wind: ${wind}MPH<br>
  Humidity: ${humidity}%`
    a.innerHTML = `
  Location: <i class="fa-solid fa-location-dot"></i> ${locationName}<br>
  Country:  <i class="fa-sharp fa-solid fa-earth-americas"></i> ${countryName}`
    b.innerHTML = `
     ${temperature}   <i class="fa-solid fa-temperature-high"></i><br>
    Feels Like: ${feelsLike}<br>
    ${main}<br>
    ${description}`
}