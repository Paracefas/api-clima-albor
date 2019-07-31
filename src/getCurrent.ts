import IWheaterAPI from './IWheaterApi'
import validateKey from './validations'

export default async function getCurrent(alborKey:number, api: IWheaterAPI) : Promise<any> {
    try {
        await validateKey(alborKey)
        return await api.call() 
    } catch (e) {
        console.error(e)
        return e
    }
}