import { Router } from 'express'
import fetch from 'cross-fetch'
import validateKey from '../validations'

const router = Router()

router.get('/', (req, res) => {
    res.send('<h1>Api-Clima | Home</h1>')
})

router.get('/:lat&:lon&:key', async (req, res) => {
    const { lat, lon, key } = req.params
    try {
        await validateKey(key)
        const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`
        const result = await fetch(url)
        const resJson = await result.json()
        res.json(resJson)
    } catch (e) {
        console.error(e)
        res.end()
    }
})

export default router