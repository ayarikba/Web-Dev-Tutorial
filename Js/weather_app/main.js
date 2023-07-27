/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '57ebbd8a0fmsha5d87a6cf24e501p1b909ajsnb5e6a758f944',
		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
	}
};




getWeatherData = (city, url) => {

    const input = url + city.value
    const prom = fetch(url,options)
    return prom.then((response) =>
    { return response.json()}
    )

}

const searchCity = async() => {
  const city = document.getElementById('city-input');
  const url = 'https://weather-api99.p.rapidapi.com/weather?city=';
  const data = await getWeatherData(city, url)
  showWeatherData(data)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = async(weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}


