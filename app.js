// Weather object
const weather = new Weather("Antsla")


// get city weather
function getWeather(){
    weather.getWeather()
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
}

getWeather()