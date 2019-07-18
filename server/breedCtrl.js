const dogs = require('../src/data')



module.exports = {
    allBreeds: (req,res) => {
        //console.log("boomstick")
        //get and delete doesn't have a body others req.prams or req.query
        res.status(200).send(dogs)
    },

}