const express = require('express')
const connectMongo = require('./db')
const cors = require('cors')

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

app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))