// import dependencies
import express from 'express'
import cors from 'cors'

// app config
const app = express()
const port = 9000

// Middlewares
app.use(express.json())
app.use(cors())

// api routes
app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

app.post('/api/v1/calculatetip', (req, res) => {
    console.log('request received')
    const amount = parseInt(req.body.amount)
    const tip = parseInt(req.body.tip)

    const toBePaid = amount + (tip / 100) * amount

    res.status(200).json({ toBePaid })
})

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`))
