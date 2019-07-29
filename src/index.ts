import express from 'express'
// routers import
import rIndex from './routes/index'

const app = express()

// settings
app.set('port', process.env.PORT || 80)

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api', rIndex)

// listening
app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`))

