export default interface IWheaterAPI {
    lat: number,
    lon: number,
    key?: string,
    call() : string
}