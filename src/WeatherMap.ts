import fetch from 'cross-fetch'


export default class WeatherMap /* implements IWheaterApi */ {
    lat: number
    lon: number
    key: string
    
    constructor(lat: number, lon: number, key?: string) {
        this.lat = lat
        this.lon = lon
        this.key = key || (process.env.WP_KEY || '')
    }

    async call() : Promise<any> {
        const url: string = 
            `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${this.key}`
        const result = await fetch(url)
        const res  = await result.json()
        const finalRes = {
            forecast: {
                simpleforecast: {
                    forecastday: [{}]
                }
            }
        }
        const listFromRes = res.list
        finalRes.forecast.simpleforecast.forecastday.pop()
        for(let element of listFromRes) {
            let p3h
            for(let i in element.rain) {
                p3h = element.rain[i] ? element.rain[i] : 0
            

                
            }
            finalRes.forecast.simpleforecast.forecastday.push(
                {
                    date: element.dt,
                    icon_url: element.weather[0].icon,
                    conditions: element.weather[0].description,
                    pop: p3h,
                    avehumidity: element.main.humidity,
                    temp_min: element.main.temp_min,
                    temp_max: element.main.temp_max,
                    wind: {
                        deg: element.wind.deg,
                        speed: element.wind.speed * (1/*Km*/ * 0.001/*m*/) * (3600/*s*/*1/*h*/)
                    }
                }
            )
        }
        return finalRes
    }
} 