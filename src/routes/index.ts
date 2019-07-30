import { Router } from 'express'
import getCurrent from '../getCurrent'
import WheaterMap from '../WheaterMap'

const router = Router()

router.get('/', (req, res) => {
    res.send('<h1>Api-Clima | Home</h1>')
})

router.get('/:lat&:lon&:key', async (req, res) => {
    const { lat, lon, key } = req.params
    res.json(await getCurrent(key, new WheaterMap(lat, lon)))
})

export default router