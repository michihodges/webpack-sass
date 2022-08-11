// Require dependencies
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// Start up an instance of app
const app = express()

// Initialize the main project folder
app.use(express.static('src/client'))
console.log(__dirname)

// GET Route index.html
app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})

// Setup server
const port = 3000
app.listen(port, ()=>{
    console.log(`server running on localhost ${port}`)
})

// GET Route mockAPI
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
