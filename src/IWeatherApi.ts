export default interface IWeatherAPI {
    lat: number,
    lon: number,
    lang: string,
    call() : Promise<any>
}