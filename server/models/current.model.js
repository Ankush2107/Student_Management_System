const mongoose = require("mongoose");

// MongoDB schema and model
const currentClassSchema = new mongoose.Schema({
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
  
const Current = mongoose.model('Current', currentClassSchema);
module.exports = Current;