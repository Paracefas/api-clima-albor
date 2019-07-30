export default class WheaterMap /* implements IWheaterApi */ {
    lat: number
    lon: number
    key: string
    
    constructor(lat: number, lon: number, key?: string) {
        this.lat = lat
        this.lon = lon
        this.key = key || (process.env.WP_KEY || '')
    }

    call() : string {
        const url: string = 
            `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${this.key}`
        console.log(url)
        return url
    }
} 