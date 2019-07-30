"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WheaterMap /* implements IWheaterApi */ {
    constructor(lat, lon, key) {
        this.lat = lat;
        this.lon = lon;
        this.key = key || (process.env.WP_KEY || '');
    }
    call() {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${this.key}`;
    }
}
exports.default = WheaterMap;
