import IWheaterAPI from './IWheaterApi'
import validateKey from './validations'
import fetch from 'cross-fetch'

export default async function getCurrent(alborKey:number, api: IWheaterAPI) : Promise<any> {
    try {
        await validateKey(alborKey)
        const result = await fetch(api.call())
        return await result.json() 
    } catch (e) {
        console.error(e)
        return e
    }
}