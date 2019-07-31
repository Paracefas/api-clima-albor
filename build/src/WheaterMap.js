"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_fetch_1 = __importDefault(require("cross-fetch"));
class WheaterMap /* implements IWheaterApi */ {
    constructor(lat, lon, key) {
        this.lat = lat;
        this.lon = lon;
        this.key = key || (process.env.WP_KEY || '');
    }
    async call() {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${this.key}`;
        const result = await cross_fetch_1.default(url);
        const res = await result.json();
        const finalRes = {
            forecast: {
                simpleforecast: {
                    forecastday: [{}]
                }
            }
        };
        const listFromRes = res.list;
        finalRes.forecast.simpleforecast.forecastday.pop();
        for (let element of listFromRes) {
            let p3h;
            for (let i in element.rain) {
                p3h = element.rain[i];
            }
            finalRes.forecast.simpleforecast.forecastday.push({
                date: element.dt,
                icon_url: element.weather[0].icon,
                conditions: element.weather[0].description,
                pop: p3h,
                avehumidity: element.main.humidity,
                temp_min: element.main.temp_min,
                temp_max: element.main.temp_max,
                wind: {
                    deg: element.wind.deg,
                    speed: element.wind.speed * (1 /*Km*/ * 0.001 /*m*/) * (3600 /*s*/ * 1 /*h*/)
                }
            });
        }
        return finalRes;
    }
}
exports.default = WheaterMap;
