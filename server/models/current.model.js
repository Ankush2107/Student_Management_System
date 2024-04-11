import mongoose from "mongoose";

// MongoDB schema and model
const studentsSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },

    currentClass: { 
        type: Number, 
        required: true 
    },

    currentSession: { 
        type: Number, 
        required: true 
    },

    currentFees: { 
        type: Number,
        required: true 
    },
});
  
module.exports  = mongoose.model('Students', studentsSchema);
 