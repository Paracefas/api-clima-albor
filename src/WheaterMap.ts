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
        return `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${this.key}`
    }
} 