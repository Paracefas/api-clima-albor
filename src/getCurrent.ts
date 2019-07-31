import IWeatherAPI from './IWeatherApi'
import validateKey from './validations'

export default async function getCurrent(alborKey:number, api: IWeatherAPI) : Promise<any> {
    try {
        await validateKey(alborKey)
        return await api.call() 
    } catch (e) {
        console.error(e)
        return e
    }
}