class Weather{
    constructor(city) {
        this.city = city
        this.key = "5d04eaa8e329daf98c6da9c9c87a2b7f"
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        const responceData = await responce.json()
        return responceData
    }

}