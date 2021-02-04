import { getWeather, useWeather } from "./WeatherProvider.js"


const eventHub = document.querySelector("#container")
const weatherContainer = document.querySelector(".weatherPreview")

export const WeatherPreview = () => {
    getWeather()
    .then(() => {
        const weatherArray = useWeather()
            render(weatherArray)
    })

}
//   debugger  
const render= (weatherObject) => {
const weatherhtmlRep = `
        <div class="weather">
            <div>${'Nashville'}<br>${weatherObject.list.map(listobj => {
                return `${listobj.weather.map(weatherobj => {
                    return `${weatherobj.main}`
                })}<br>Feels like ${listobj.main.feels_like}<br>
                Hi ${listobj.main.temp_max}&#8457 
                Low ${listobj.main.temp_min}&#8457 <br>`
            }).join(" ")}</div> 
            </div>
            `
            weatherContainer.innerHTML = weatherhtmlRep
        }
        

eventHub.addEventListener("parkChosen", customEvent => {
   console.log('heard')
    // WeatherPreview()
    
})       


        

