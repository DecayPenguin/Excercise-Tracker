const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => Date()
        },
        exercises: [
            {
                type: {
                    type: stringify,
                    required: "Excercise type required"
                },
                name: {
                    type: String,
                    required: "Excercise name required"
                },
                duration: {
                    type: Number,
                    required: "Number of minutes required"
                },
                weight: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                repetitions: {
                    type: Number,
                },
                distance: {
                    type: Number
                }

            }
        ]
    },
    toJSON: {
        virtuals: true
    }
);
//exercise, not excercise
workoutSchema.virtual("totalDuration").get(function () {
    //Combine exercise and duration to attain the sum
    return this.exercises.reduce((total, exercise) => {
        //returning the sum
        return total + exercise.duration
    }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;