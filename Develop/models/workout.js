const { text } = require("express");

const Schema = mongoose.Schema;
const workoutSchema = new Schema({

    exercise: {
        type: text,
        required: "You must choose an exercise"
    }
})