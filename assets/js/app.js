var url="https://api.openweathermap.org/data/2.5/weather?q="
var key ="&appid=af602dc449c408cf85bd9441f8e99c2b"
var input = document.getElementById("cityInput")


const getData = (inputCityName) =>{
    let query = url+inputCityName+key+"&units=metric&lang=tr"
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
    
}

const displayResult = (result) =>{
    console.log(result)
    const cityNameLabel = document.getElementById("cityNameLabel")
    cityNameLabel.innerText = result.name + ", " + result.sys.country
    const degreeData = document.getElementById("degreeData")
    degreeData.innerText = Math.floor(result.main.temp) + "°C"
    const weatherData = document.getElementById("weatherData")
    weatherData.innerText = result.weather[0].description

    const weatherMinMax = document.getElementById("weatherMinMax")
    weatherMinMax.innerText = "Max "+ Math.floor(result.main.temp_max) + "°C  / " + "Min "+Math.floor(result.main.temp_min)+"°C"    
    

}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        var inputCityName = document.getElementById("cityInput").value
        getData(inputCityName)
    }
  });
