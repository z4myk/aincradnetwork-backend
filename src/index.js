const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const publicationRoutes = require('./routes/publication') 
const eventRoutes = require('./routes/events')
const port = process.env.PORT;

//middleware
app.use(cors())
app.use(express.json())
app.use('/api', eventRoutes)
app.use('/api', publicationRoutes)

//routes
app.get('/', (req, res) => {
    res.send("welcome to my api")
})



//mongo db connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('DB ONLINE')).catch((error) => console.log(error))


app.listen(9000, () => {
    console.log('Servidor abierto en puerto', port)
})
