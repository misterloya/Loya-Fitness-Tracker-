const mongoose = require('mongoose');
const {Schema} = mongoose;

const exercise = new Schema ({ 
    name: {
        type: String,
        required: "Exercise Name is required",
    },
    type: {
        type: String,
        required: "Exercise Type is required"
    },
    duration: {
        type: Number,
        require: "Duration is required"
    }, 
    distance: {
        type: Number
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
});

const workout = new Schema ({
    day:{
        type: Date,
        default:Date.now, 
    },

    exercises:[exercise]
})



const Workout = mongoose.model("Workout", workout)
module.exports = Workout; 