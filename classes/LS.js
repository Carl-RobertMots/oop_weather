class LS{
    constructor() {
        this.defaultCity = "Antsla"
        this.city
    }

    getCity(){
        if(localStorage.getItem("city")=== null){
            this.city = this.defaultCity
        } else {
            this.city = localStorage.getItem("city")
        }
        return this.city
    }
    setCity(city){
        localStorage.setItem("city", city)
    }
}