const express = require('express');

const Athlete = require('./athlete-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    const queryResult = (err, athletes) => {
        if (err) {
            console.log(err)
            res.status(500).json({ 
                message: "Failed to get all athletes from db"
            })
        }else{
            res.status(200).json(athletes);
        }
    }
    Athlete
        .find()
        .sort({name: 1})
        .exec(queryResult)
});

router.post('/', (req, res) => {
    const athleteObj = req.body
    console.log(athleteObj)
    Athlete
        .create(req.body, function (err, addedAthlete) {
            if (err){
                console.log(err)
                res.status(500).json({ 
                    message: "Failed to post new athlete data"
                })
            } else {
                res.status(201).json(addedAthlete);
            }
        });
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const athleteObj = req.body
    Athlete
        .findByIdAndUpdate(
            { _id: id },
            { $set: athleteObj },
            { new: true },
            function (err, updatedAthlete) {
                if (err){
                    console.log(err)
                    res.status(500).json({ 
                        message: "Failed to update athlete data"
                    })
                } else {
                    res.status(200).json(updatedAthlete);
                }
            }
        )
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Athlete
        .remove(
            { _id: id },
            function (err, data) {
                if (err){
                    console.log(err)
                    res.status(500).json({ 
                        message: "Failed to update athlete data"
                    })
                } else {
                    console.log(data)
                    res.status(200).json({
                        message: "Successfully deleted athlete profile"
                    });
                }
            }
        )
})

module.exports = router;
