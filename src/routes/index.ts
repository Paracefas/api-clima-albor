import { Router } from 'express'
import getCurrent from '../getCurrent'
import WeatherMap from '../WeatherMap'

const router = Router()

router.get('/', (req, res) => {
    res.send('<h1>Api-Clima | Home</h1>')
})

router.get('/:lat&:lon&:lang&:key', async (req, res) => {
    const { lat, lon, key, lang } = req.params
    res.json(await getCurrent(key, new WeatherMap(lat, lon, lang)))
})

export default router