"use strict";

import moongose from "mongoose";

// Define cellar Schema
const cellarSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
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
    }
});

// Create the Cellar model
const Cellar = moongose.models.Cellar || moongose.model("Cellar", cellarSchema);

// Export the cellar model
export default Cellar;
