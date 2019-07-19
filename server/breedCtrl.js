const dogs = require('../src/data')



module.exports = {
    allBreeds: (req,res) => {
        //console.log("boomstick")
        //get and delete doesn't have a body others req.prams or req.query
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
    }

}