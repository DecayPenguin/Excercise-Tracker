const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: Date.now
      },
      //Asks for the type of excercise and needs it to progress
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Excercise type required"
          },
          name: {
            type: String,
            trim: true,
            required: "Excercise name required"
          },
          duration: {
            type: Number,
            required: "Number of minutes for excercise required"
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
    },
    {
      toJSON: {
        // include any virtual properties when data is requested
        virtuals: true
      }
    }
  );
  // adds a dynamically-created property to schema
  workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  const Workout = mongoose.model("Workout", workoutSchema);
  module.exports = Workout;