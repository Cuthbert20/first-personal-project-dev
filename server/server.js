const express = require('express')
const app = express()
const PORT = 4005
const breedCtrl = require('./breedCtrl')
const dogs = require("../src/data")

app.use(express.json())


app.get('/api/dogs', breedCtrl.allBreeds)
app.put('/api/dogs/:id', breedCtrl.updateBreed)
app.post('/api/dogs', breedCtrl.newDog)
app.delete('/api/dogs/:id', breedCtrl.delete)
app.get('/api/dogbreed',breedCtrl.queryFinder)//we are querying ? reps the end of the url then you enter the key then a = then the value



app.listen(PORT, () => console.log(`${PORT} is always listening`))