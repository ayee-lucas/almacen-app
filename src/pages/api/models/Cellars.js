"use strict";

import moongose from "mongoose";

// Define cellar Schema
const cellarSchema = new moongose.Schema({
    name: {
        type: "string",
        required: true,
    },
    description: {
        type: "string"
    },
    location: {
        type: "string",
        required: true,
    },
    size: {
        type: "string",
        required: true,
    },
    state: {
        type: "string",
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

// Create the Cellar model
const Cellar = moongose.models.Client || moongose.model("Cellar", cellarSchema);

// Export the cellar model
export default Cellar;
