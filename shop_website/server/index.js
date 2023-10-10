const express = require('express')
const cors = require('cors')
const connectMongo = require('./db.js')

const app = express()
const port = 5000

connectMongo();

app.use(express.json()) //To use the data that has been sent from the endpoint(frontend).
app.use(cors())

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

//Available Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/products', require('./routes/products.js'))
app.use('/api/orders', require('./routes/orders.js'))