"use strict";

import mongoose from "mongoose";

// Define cellar Schema
const cellarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true    
    },
    description: {
        type: String,
    },
    location: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Clients'
        
    }
});

// Create the Cellar model
const Cellar = mongoose.models.Cellar || mongoose.model("Cellar", cellarSchema);

// Export the cellar model
export default Cellar;
