"use strict";

import mongoose from "mongoose";

// Define the Lease Schema
const clientSchema = new mongoose.Schema({
    cellar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cellar',
        required: true
      },
      client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
      },
    service: [{
        service: {type: mongoose.Schema.Types.ObjectId, ref: 'Additional'},
      }],
      
      date: {
        type: Date,
        default: Date.now()
      },
}, {
    versionKey: false
});

// Create the Lease model
const Lease = mongoose.models.Lease || mongoose.model("Lease", clientSchema);

// Export the Lease model
export default  Lease;