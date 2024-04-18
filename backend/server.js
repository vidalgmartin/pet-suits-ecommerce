// module imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const suitRoutes = require('./routes/routes')

// environmental variables 
require('dotenv').config()

// variable to initialize an Express.js web application
const app  = express()

// allow all incoming requests
app.use(cors())

// middleware for parsing json in the request body
app.use(express.json())

// Serve static files from the "uploads/item-image" directory
app.use('/uploads/item-image', express.static(path.join(__dirname, 'uploads', 'item-image')))

// routes
app.use('/api', suitRoutes)

// connect to MongoDB atlas
mongoose.connect(process.env.MONGO_URI, {
    dbName: 'ecommerce-project'
})
.then(() => {
        // start to listening for requests only if it's connected to the database
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port', process.env.PORT)
        })
    })
.catch((error) => {
    console.log(error)
})