const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js').default

// Start up an instance of app
const app = express()

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

// API
const masterUrl = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);
let userEnter = [] ;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST Route
app.post('/api', async function(req, res) {
    userEnter = req.body.url;
    console.log(`The site that you entered is: ${userEnter}`);
    const apiURL = `${masterUrl}key=${apiKey}&url=${userEnter}&lang=en`

    const response = await fetch(apiURL)
    const mData = await response.json()
    console.log(mData)
    res.send(mData)
   
})


app.listen(8082, function () {

    console.log('server is running :) :) !!!!!!!!!');
    console.log('on localhost port 8082 !!!');
})