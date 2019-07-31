export default interface IWeatherAPI {
    lat: number,
    lon: number,
    key?: string,
    call() : Promise<any>
}