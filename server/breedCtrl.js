const dogs = require('../src/data')


let id = dogs.length + 1

module.exports = {
    allBreeds: (req,res) => {
        //console.log("boomstick")
        res.status(200).send(dogs)
    },
    updateBreed: (req,res) => {
        //destructering req.params and assigning its current value to id
        //console.log(req.body)
        const {id} = req.params
        console.log('id',req.params)
        const {breed} = req.body
        console.log("name", req.body)
        const index = dogs.findIndex(breed => {
            return breed.id === +id
        })
        console.log("index", index)
        dogs[index].breed = breed
        res.status(200).send(dogs)
    },
    newDog: (req,res) => {
        dogs.push({...req.body, id})
        id++
        res.status(200).send(dogs)//dogs is the response to our post request cause we are sending it ie send
    },
    delete: (req,res) => {
        //console.log(req.params) will give you the obj id
        const {id} = req.params
        //must match what the key is called in data. ie breed
        const index = dogs.findIndex(doggy => {
            return doggy.id === +id
        })
        dogs.splice(index,1)
        res.status(200).send(dogs)
    },
    //HELP
    queryFinder: (req,res) => {
        //console.log(req.query)
       let { breed } = req.query
       console.log(breed)
       let correctBreed = dogs.filter(elm => {
          return elm.breed === breed
       }) 
        res.status(200).send(correctBreed)
    }

}