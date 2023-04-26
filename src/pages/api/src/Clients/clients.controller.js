'use strict';

import {connect} from "./configs/mongo"

connect();

exports.test = ()=>{
    res.send({message})
}
