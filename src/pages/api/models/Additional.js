'use strict'

import mongoose from "mongoose";

// Define the Additional Schema
const additionalSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true

    },
    description:{
        type:String,
        required: true

    },
    price:{
        type:Number,
        required:true
    }

});


// Create the Additional model
const Additional = mongoose.models.Additional || mongoose.model("Additional", additionalSchema);

// Export the Additional model
export default Additional;
