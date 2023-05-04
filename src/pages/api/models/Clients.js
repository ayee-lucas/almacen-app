"use strict";

import moongose from "mongoose";

// Define the Client Schema
const clientSchema = new moongose.Schema({
  name: {
    type: "string",
    required: true,
  },
  surname: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  phone: {
    type: "string",
    required: true,
  },
  address: {
    type: "string",
    required: true,
  },
  nit: {
    type: "string",
    required: true,
  },
});

// Create the Client model
const Client = moongose.models.Client || moongose.model("Client", clientSchema);

// Export the Client model
export default  Client;
