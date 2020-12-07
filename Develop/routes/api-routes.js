const router = require("express").Router();
const Workout = require("../models/workout.js");


router.post("/api/workout.js", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workout/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { excercises: body }},
        {new: true, runValidators: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(dbWorkout);
    })
});
router.get("/api/workout/range", (req, res) => {
    Workout.find()
    .then(dbWorkouts);
})
.catch(err => {
    res.json(dbWorkouts);
})
.catch(err => {
    res.json(err);
});
