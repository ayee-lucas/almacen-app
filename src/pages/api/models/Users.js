"use strict";

import moongose from "mongoose";

// Define cellar Schema
const userSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        upperCase: true,
        default: 'EMPLOYEE'
    }
});

// Create the Cellar model
const User = moongose.models.User || moongose.model("User", userSchema);

// Export the cellar model
export default User;
