'use strict';

import { clientSchema, mongoose, model, models } from "mongoose";

const Client = mongoose.model("Client", clientSchema)({
    name:{
        type: 'string',
        required: true
    },
    surname:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    },
    phone:{
        type: 'string',
        required: true
    },
    address:{
        type: 'string',
        required: true
    },
    nit:{
        type: 'string',
        required: true
    }
})

export default Client