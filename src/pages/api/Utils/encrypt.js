'use strict'

import bcrypt from "bcrypt"

const encrypt = async (password) => {
    try {
        return await bcrypt.hash(password, 10)
        
    } catch (err) {
        console.log(err)
       
    }
}

export default encrypt;