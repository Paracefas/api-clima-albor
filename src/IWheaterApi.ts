export default interface IWheaterAPI {
    lat: number,
    lon: number,
    key?: string,
    call() : Promise<any>
}