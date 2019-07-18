const express = require('express')
const app = express()
const PORT = 4005
const breedCtrl = require('./breedCtrl')
const dogs = require("../src/data")

app.use(express.json())

app.get('/api/dogs', breedCtrl.allBreeds)



app.listen(PORT, () => console.log(`${PORT} is always listening`))