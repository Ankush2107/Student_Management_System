const mongoose = require("mongoose");

// MongoDB schema and model
const currentDetailSchema = new mongoose.Schema({
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
  
const CurrentDetail = mongoose.model('Current', currentDetailSchema);
module.exports = CurrentDetail;